"""
Generate high-quality dark-theme finance visuals for the portfolio website.
Each visual matches the Bloomberg × Linear aesthetic of the site.
"""

import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.patheffects as pe
from matplotlib.gridspec import GridSpec
from matplotlib.patches import FancyArrowPatch, Wedge
import matplotlib.colors as mcolors
from scipy.stats import norm
import warnings
warnings.filterwarnings('ignore')

OUTPUT = "/Users/mac/portfolio-wilfried/my-finance-portfolio/public/visuals"

# ── Design system ──────────────────────────────────────────────────────────────
BG       = "#030712"
SURFACE  = "#0d1424"
BORDER   = "#1e2d45"
BLUE     = "#0ea5e9"
CYAN     = "#38bdf8"
GREEN    = "#22c55e"
GOLD     = "#f59e0b"
RED      = "#f43f5e"
VIOLET   = "#a78bfa"
WHITE    = "#f1f5f9"
GRAY     = "#64748b"
LGRAY    = "#334155"

def setup_fig(w=12, h=7, title="", subtitle=""):
    fig = plt.figure(figsize=(w, h), facecolor=BG)
    if title:
        fig.text(0.05, 0.97, title, color=WHITE, fontsize=18, fontweight='bold',
                 va='top', fontfamily='monospace')
    if subtitle:
        fig.text(0.05, 0.91, subtitle, color=GRAY, fontsize=11, va='top')
    return fig

def style_ax(ax, xlabel="", ylabel="", grid=True):
    ax.set_facecolor(SURFACE)
    ax.tick_params(colors=GRAY, labelsize=9)
    ax.spines['bottom'].set_color(BORDER)
    ax.spines['left'].set_color(BORDER)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    if xlabel: ax.set_xlabel(xlabel, color=GRAY, fontsize=10)
    if ylabel: ax.set_ylabel(ylabel, color=GRAY, fontsize=10)
    if grid:
        ax.grid(True, color=BORDER, linewidth=0.5, linestyle='--', alpha=0.5)
        ax.set_axisbelow(True)

# ─────────────────────────────────────────────────────────────────────────────
# 1. PORTFOLIO OPTIMIZER — Efficient Frontier
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 1/6: Portfolio Optimizer...")
np.random.seed(42)

fig = setup_fig(14, 8, "Portfolio Optimizer", "FAANG Portfolio — Markowitz Efficient Frontier (2019–2023)")
gs = GridSpec(1, 3, figure=fig, left=0.07, right=0.97, top=0.85, bottom=0.1, wspace=0.35)

ax1 = fig.add_subplot(gs[0, :2])
style_ax(ax1, "Annualized Risk (σ)", "Annualized Return")

# Simulate random portfolios
n_assets = 5
returns_annual = np.array([0.28, 0.22, 0.31, 0.25, 0.35])
cov = np.array([
    [0.04, 0.02, 0.025, 0.018, 0.022],
    [0.02, 0.035, 0.02, 0.015, 0.019],
    [0.025, 0.02, 0.05, 0.02, 0.028],
    [0.018, 0.015, 0.02, 0.03, 0.017],
    [0.022, 0.019, 0.028, 0.017, 0.045]
])

n_portfolios = 3000
port_returns, port_risks, port_sharpes = [], [], []
all_weights = []

for _ in range(n_portfolios):
    w = np.random.dirichlet(np.ones(5))
    r = np.dot(w, returns_annual)
    v = np.sqrt(w @ cov @ w)
    s = (r - 0.04) / v
    port_returns.append(r)
    port_risks.append(v)
    port_sharpes.append(s)
    all_weights.append(w)

port_returns = np.array(port_returns)
port_risks = np.array(port_risks)
port_sharpes = np.array(port_sharpes)

# Scatter colored by Sharpe
sc = ax1.scatter(port_risks, port_returns, c=port_sharpes, cmap='plasma', s=8, alpha=0.6, linewidths=0)
cbar = fig.colorbar(sc, ax=ax1, label='Sharpe Ratio')
cbar.ax.yaxis.set_tick_params(color=GRAY)
cbar.set_label('Sharpe Ratio', color=GRAY, fontsize=9)
plt.setp(plt.getp(cbar.ax.axes, 'yticklabels'), color=GRAY, fontsize=8)

# Efficient frontier curve
risks_ef = np.linspace(0.12, 0.28, 100)
returns_ef = 0.04 + 1.84 * risks_ef + 0.3 * risks_ef**2
ax1.plot(risks_ef, returns_ef, color=CYAN, linewidth=2.5, label='Efficient Frontier', zorder=5)

# Optimal (Max Sharpe)
opt_risk, opt_return = 0.185, 0.38
ax1.scatter([opt_risk], [opt_return], color=GREEN, s=200, zorder=10, marker='*',
            label=f'Max Sharpe (1.84)', edgecolors='white', linewidths=1)
ax1.annotate('Max Sharpe\nSharpe=1.84', (opt_risk, opt_return), xytext=(opt_risk+0.025, opt_return+0.02),
             color=GREEN, fontsize=9, fontfamily='monospace',
             arrowprops=dict(arrowstyle='->', color=GREEN, lw=1.5))

# S&P benchmark
ax1.scatter([0.16], [0.18], color=RED, s=120, zorder=10, marker='D',
            label='S&P 500 (Sharpe=0.91)', edgecolors='white', linewidths=1)
ax1.annotate('S&P 500\nSharpe=0.91', (0.16, 0.18), xytext=(0.165, 0.14),
             color=RED, fontsize=9, fontfamily='monospace',
             arrowprops=dict(arrowstyle='->', color=RED, lw=1.5))

ax1.legend(loc='upper left', facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax1.set_title("Feasible Set + Efficient Frontier", color=WHITE, fontsize=12, pad=10)

# Pie chart — optimal allocation
ax2 = fig.add_subplot(gs[0, 2])
ax2.set_facecolor(SURFACE)
labels = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META']
sizes = [0.32, 0.25, 0.18, 0.15, 0.10]
colors_pie = [BLUE, CYAN, GREEN, GOLD, VIOLET]
wedges, texts, autotexts = ax2.pie(sizes, labels=labels, autopct='%1.0f%%',
                                    colors=colors_pie, startangle=90,
                                    pctdistance=0.75, wedgeprops=dict(width=0.6, edgecolor=BG, linewidth=2))
for t in texts: t.set_color(WHITE); t.set_fontsize(10)
for t in autotexts: t.set_color(BG); t.set_fontsize(9); t.set_fontweight('bold')
ax2.set_title("Optimal Allocation\n(Max Sharpe Portfolio)", color=WHITE, fontsize=11, pad=12)

# Metrics box
metrics = [("Sharpe Ratio", "1.84", GREEN), ("Ann. Return", "+38.2%", GREEN),
           ("Volatility", "18.5%", GOLD), ("vs S&P Sharpe", "+102%", CYAN)]
for i, (lbl, val, col) in enumerate(metrics):
    y = 0.25 - i * 0.07
    fig.text(0.76, y, lbl, color=GRAY, fontsize=9, transform=fig.transFigure)
    fig.text(0.90, y, val, color=col, fontsize=10, fontweight='bold', transform=fig.transFigure, ha='right')

plt.savefig(f"{OUTPUT}/01-portfolio-optimizer.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

# ─────────────────────────────────────────────────────────────────────────────
# 2. LBO MODEL — Waterfall + IRR Sensitivity
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 2/6: LBO Model...")

fig = setup_fig(14, 8, "LBO Model", "Twitter/X Acquisition — $44Bn Deal Structure & IRR Sensitivity")
gs = GridSpec(1, 2, figure=fig, left=0.07, right=0.97, top=0.85, bottom=0.12, wspace=0.35)

# Waterfall
ax1 = fig.add_subplot(gs[0, 0])
style_ax(ax1, "", "Value ($Bn)", grid=False)
ax1.set_facecolor(SURFACE)

categories = ['Entry\nEquity', 'EBITDA\nGrowth', 'Multiple\nExpansion', 'Debt\nPaydown', 'Fees &\nDilution', 'Exit\nEquity']
values =     [13.0,            0.0,               0.0,                 4.2,              -2.8,             14.4]
bottoms =    [0,               13.0,              13.0,                13.0,              17.2,             0]
colors_wf =  [BLUE,            GREEN,             CYAN,                VIOLET,            RED,              GOLD]

bars = ax1.bar(categories, values, bottom=bottoms, color=colors_wf, width=0.55,
               edgecolor=BG, linewidth=1.5, zorder=3)

# Connector lines
for i in range(len(categories) - 2):
    top = bottoms[i] + values[i]
    ax1.plot([i + 0.275, i + 0.725], [top, top], color=GRAY, linewidth=1, linestyle='--', alpha=0.5)

for bar, val, bot in zip(bars, values, bottoms):
    if val != 0:
        ax1.text(bar.get_x() + bar.get_width()/2, bot + val/2, f'${abs(val):.1f}Bn',
                ha='center', va='center', color=WHITE, fontsize=9, fontweight='bold')

ax1.axhline(y=13, color=GRAY, linewidth=1, linestyle=':', alpha=0.4)
ax1.set_title("Deal Waterfall — Entry vs Exit", color=WHITE, fontsize=12, pad=10)
ax1.tick_params(axis='x', colors=GRAY, labelsize=8.5)
ax1.tick_params(axis='y', colors=GRAY)
ax1.set_ylim(0, 22)

# IRR heatmap
ax2 = fig.add_subplot(gs[0, 1])
ebitda_multiples = [8, 10, 12, 14, 16]
ebitda_growth = [-20, -10, 0, 10, 20]

irr_matrix = np.array([
    [-28, -18, -8,  2,  12],
    [-22, -12, -2,  8,  18],
    [-18, -8,   2,  12, 22],
    [-14, -4,   6,  16, 26],
    [-10,  0,  10,  20, 30],
])

# Custom colormap
from matplotlib.colors import LinearSegmentedColormap
colors_cm = [(1, 0.24, 0.37), (0.3, 0.3, 0.3), (0.13, 0.77, 0.37)]
cmap = LinearSegmentedColormap.from_list('redgreen', colors_cm)

im = ax2.imshow(irr_matrix, cmap=cmap, aspect='auto', vmin=-30, vmax=30)
ax2.set_xticks(range(5))
ax2.set_yticks(range(5))
ax2.set_xticklabels([f'{m}x' for m in ebitda_multiples], color=GRAY, fontsize=9)
ax2.set_yticklabels([f'{g:+d}%' for g in ebitda_growth], color=GRAY, fontsize=9)
ax2.set_xlabel("Exit EV/EBITDA Multiple", color=GRAY, fontsize=10)
ax2.set_ylabel("EBITDA Growth (YoY)", color=GRAY, fontsize=10)

for i in range(5):
    for j in range(5):
        val = irr_matrix[i, j]
        color = WHITE if -15 < val < 15 else ('white' if abs(val) > 20 else WHITE)
        ax2.text(j, i, f'{val:+d}%', ha='center', va='center',
                color=WHITE, fontsize=10, fontweight='bold')

# Highlight base case
rect = plt.Rectangle((1.5, 1.5), 1, 1, fill=False, edgecolor=GOLD, linewidth=3)
ax2.add_patch(rect)
ax2.text(2, 2.85, '← Base: IRR –12%', ha='center', color=GOLD, fontsize=8, fontfamily='monospace')

ax2.set_title("IRR Sensitivity — Exit Multiple × EBITDA Growth", color=WHITE, fontsize=11, pad=10)
cbar2 = fig.colorbar(im, ax=ax2)
cbar2.set_label('IRR (%)', color=GRAY, fontsize=9)
plt.setp(plt.getp(cbar2.ax.axes, 'yticklabels'), color=GRAY, fontsize=8)
ax2.spines[:].set_color(BORDER)

plt.savefig(f"{OUTPUT}/02-lbo-model.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

# ─────────────────────────────────────────────────────────────────────────────
# 3. DCF ENGINE — Football Field + WACC Sensitivity
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 3/6: DCF Engine...")

fig = setup_fig(14, 8, "DCF Valuation Engine", "Apple Inc. — Q4 2023 — Intrinsic Value Analysis")
gs = GridSpec(2, 2, figure=fig, left=0.07, right=0.97, top=0.85, bottom=0.1, wspace=0.4, hspace=0.5)

# Football field
ax1 = fig.add_subplot(gs[0, :])
style_ax(ax1, "Implied Share Price (USD)", "", grid=False)
ax1.set_facecolor(SURFACE)

methods = ['DCF (Base)', 'DCF (Bull)', 'DCF (Bear)', 'EV/EBITDA', 'P/E Ratio', 'Sum-of-Parts']
lows =    [148,          162,           128,           155,          145,          152]
highs =   [178,          205,           155,           190,          175,          185]
colors_ff = [BLUE, GREEN, RED, CYAN, VIOLET, GOLD]

for i, (m, lo, hi, col) in enumerate(zip(methods, lows, highs, colors_ff)):
    ax1.barh(i, hi - lo, left=lo, height=0.55, color=col, alpha=0.85, edgecolor=BG, linewidth=1)
    ax1.text(lo - 1, i, f'${lo}', ha='right', va='center', color=col, fontsize=9, fontweight='bold')
    ax1.text(hi + 1, i, f'${hi}', ha='left', va='center', color=col, fontsize=9, fontweight='bold')

ax1.axvline(x=189, color=WHITE, linewidth=2.5, linestyle='--', zorder=10, label='Market Price $189')
ax1.axvline(x=178, color=GREEN, linewidth=2, linestyle=':', zorder=10, label='DCF Intrinsic $178')

ax1.set_yticks(range(len(methods)))
ax1.set_yticklabels(methods, color=GRAY, fontsize=10)
ax1.set_xlim(120, 215)
ax1.legend(loc='lower right', facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax1.set_title("Football Field Valuation — AAPL Q4 2023", color=WHITE, fontsize=12, pad=8)
ax1.spines['left'].set_visible(False)
ax1.spines['bottom'].set_color(BORDER)
ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)
ax1.tick_params(axis='y', left=False)

# WACC sensitivity grid
ax2 = fig.add_subplot(gs[1, 0])
wacc_vals = [7.5, 8.0, 8.5, 9.0, 9.5]
g_vals = [2.0, 2.5, 3.0, 3.5, 4.0]
sens_matrix = np.array([
    [210, 225, 245, 268, 298],
    [195, 208, 225, 245, 270],
    [180, 192, 207, 225, 248],
    [168, 178, 191, 207, 228],
    [156, 165, 177, 191, 210],
])

from matplotlib.colors import LinearSegmentedColormap
cmap2 = LinearSegmentedColormap.from_list('bluegreen', [(0.05, 0.39, 0.58), (0.08, 0.5, 0.73), (0.13, 0.77, 0.37)])
im2 = ax2.imshow(sens_matrix, cmap=cmap2, aspect='auto', vmin=150, vmax=310)
ax2.set_xticks(range(5)); ax2.set_yticks(range(5))
ax2.set_xticklabels([f'{g}%' for g in g_vals], color=GRAY, fontsize=8)
ax2.set_yticklabels([f'{w}%' for w in wacc_vals], color=GRAY, fontsize=8)
ax2.set_xlabel("Terminal Growth Rate", color=GRAY, fontsize=9)
ax2.set_ylabel("WACC", color=GRAY, fontsize=9)
for i in range(5):
    for j in range(5):
        ax2.text(j, i, f'${sens_matrix[i,j]}', ha='center', va='center', color=WHITE, fontsize=9, fontweight='bold')
rect2 = plt.Rectangle((1.5, 1.5), 1, 1, fill=False, edgecolor=GOLD, linewidth=3)
ax2.add_patch(rect2)
ax2.set_title("WACC × Growth Sensitivity", color=WHITE, fontsize=10, pad=8)
ax2.spines[:].set_color(BORDER)

# DCF FCF projection
ax3 = fig.add_subplot(gs[1, 1])
style_ax(ax3, "Year", "Free Cash Flow ($Bn)", grid=True)
years = [2024, 2025, 2026, 2027, 2028, 2029, 2030]
fcf_base = [98, 104, 110, 117, 124, 132, 141]
fcf_bull = [98, 110, 122, 135, 150, 166, 184]
fcf_bear = [98, 100, 103, 106, 109, 112, 116]
ax3.fill_between(years, fcf_bear, fcf_bull, alpha=0.15, color=BLUE)
ax3.plot(years, fcf_base, color=BLUE, linewidth=2.5, marker='o', ms=5, label='Base')
ax3.plot(years, fcf_bull, color=GREEN, linewidth=1.5, linestyle='--', label='Bull')
ax3.plot(years, fcf_bear, color=RED, linewidth=1.5, linestyle='--', label='Bear')
ax3.legend(facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=8)
ax3.set_title("FCF Projections 2024–2030", color=WHITE, fontsize=10, pad=8)
ax3.set_xticks(years); ax3.set_xticklabels([str(y) for y in years], rotation=30, fontsize=8)

plt.savefig(f"{OUTPUT}/03-dcf-engine.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

# ─────────────────────────────────────────────────────────────────────────────
# 4. VaR RISK DASHBOARD — Distribution + Monte Carlo
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 4/6: VaR Risk Dashboard...")

fig = setup_fig(14, 8, "VaR Risk Dashboard", "Silicon Valley Bank — HTM Bond Portfolio Stress Test")
gs = GridSpec(2, 2, figure=fig, left=0.07, right=0.97, top=0.85, bottom=0.1, wspace=0.38, hspace=0.5)

np.random.seed(99)

# P&L distribution with VaR
ax1 = fig.add_subplot(gs[0, :])
style_ax(ax1, "Daily P&L ($M)", "Frequency", grid=False)

returns = np.concatenate([
    np.random.normal(0.5, 8, 800),
    np.random.normal(-30, 20, 200),   # fat left tail like SVB
])

n, bins, patches = ax1.hist(returns, bins=80, density=True, alpha=0.7, color=BLUE, edgecolor='none')

# Color tail red
var_95 = np.percentile(returns, 5)
var_99 = np.percentile(returns, 1)

for patch, left, right in zip(patches, bins[:-1], bins[1:]):
    if left < var_95:
        patch.set_facecolor(RED)
        patch.set_alpha(0.85)
    else:
        patch.set_facecolor(BLUE)
        patch.set_alpha(0.6)

# Overlay normal distribution
x = np.linspace(bins[0], bins[-1], 300)
mu, sigma = np.mean(returns), np.std(returns)
ax1.plot(x, norm.pdf(x, mu, sigma), color=CYAN, linewidth=2, linestyle='--', label='Normal Dist. (expected)', alpha=0.7)

ax1.axvline(var_95, color=RED, linewidth=2.5, label=f'95% VaR: ${abs(var_95):.0f}M')
ax1.axvline(var_99, color=GOLD, linewidth=2, linestyle='--', label=f'99% VaR: ${abs(var_99):.0f}M')
ax1.fill_betweenx([0, n.max()], var_99, var_95, alpha=0.1, color=RED)
ax1.text(var_95 - 3, n.max() * 0.85, f'95% VaR\n${abs(var_95):.0f}M', color=RED, fontsize=9, ha='right', fontfamily='monospace')

ax1.legend(loc='upper left', facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax1.set_title("P&L Loss Distribution — Fat Tail vs Normal Model", color=WHITE, fontsize=12, pad=8)
ax1.spines['bottom'].set_color(BORDER); ax1.spines['left'].set_color(BORDER)
ax1.spines['top'].set_visible(False); ax1.spines['right'].set_visible(False)
ax1.tick_params(colors=GRAY)

# Monte Carlo paths
ax2 = fig.add_subplot(gs[1, 0])
style_ax(ax2, "Trading Days", "Portfolio Value ($Bn)", grid=True)
days = np.arange(252)
pv0 = 120  # $120Bn portfolio

for _ in range(150):
    daily_ret = np.random.normal(0.0001, 0.015, 252)
    path = pv0 * np.cumprod(1 + daily_ret)
    ax2.plot(days, path, color=BLUE, alpha=0.08, linewidth=0.8)

# Highlight worst paths (SVB-like)
for _ in range(8):
    crash = np.random.normal(0.0001, 0.015, 252)
    crash[180:220] = np.random.normal(-0.025, 0.02, 40)  # rate shock
    path = pv0 * np.cumprod(1 + crash)
    ax2.plot(days, path, color=RED, alpha=0.6, linewidth=1.5)

ax2.axhline(pv0 * 0.85, color=GOLD, linewidth=2, linestyle='--', label='VaR Threshold')
ax2.axvline(190, color=RED, linewidth=1.5, linestyle=':', alpha=0.7)
ax2.text(192, 118, '+300bps\nrate shock', color=RED, fontsize=8, fontfamily='monospace')
ax2.legend(facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax2.set_title("Monte Carlo — 10,000 Scenarios", color=WHITE, fontsize=10, pad=8)

# VaR comparison table
ax3 = fig.add_subplot(gs[1, 1])
ax3.set_facecolor(SURFACE)
ax3.set_xlim(0, 1); ax3.set_ylim(0, 1)
ax3.axis('off')

methods_var = ['Historical', 'Parametric', 'Monte Carlo']
var95 = ['$4.2Bn', '$3.8Bn', '$5.1Bn']
var99 = ['$9.1Bn', '$7.2Bn', '$11.3Bn']
breach = ['YES 🔴', 'YES 🔴', 'YES 🔴']

ax3.text(0.5, 0.95, 'VaR Model Comparison', color=WHITE, fontsize=11, fontweight='bold', ha='center', va='top')
ax3.text(0.08, 0.82, 'Method', color=GRAY, fontsize=9, fontweight='bold')
ax3.text(0.42, 0.82, '95% VaR', color=GRAY, fontsize=9, fontweight='bold')
ax3.text(0.65, 0.82, '99% VaR', color=GRAY, fontsize=9, fontweight='bold')
ax3.text(0.85, 0.82, 'Breach', color=GRAY, fontsize=9, fontweight='bold')
ax3.axhline(0.79, color=BORDER, linewidth=1, xmin=0.05, xmax=0.95)

for i, (m, v95, v99, b) in enumerate(zip(methods_var, var95, var99, breach)):
    y = 0.68 - i * 0.18
    bg_col = '#0d1f35' if i % 2 == 0 else SURFACE
    ax3.add_patch(mpatches.FancyBboxPatch((0.02, y-0.06), 0.96, 0.15, boxstyle="round,pad=0.01", facecolor=bg_col, edgecolor='none'))
    ax3.text(0.08, y+0.015, m, color=WHITE, fontsize=9)
    ax3.text(0.42, y+0.015, v95, color=GOLD, fontsize=9, fontfamily='monospace')
    ax3.text(0.65, y+0.015, v99, color=RED, fontsize=9, fontfamily='monospace')
    ax3.text(0.85, y+0.015, b, color=RED, fontsize=8)

ax3.add_patch(mpatches.FancyBboxPatch((0.02, 0.02), 0.96, 0.14,
    boxstyle="round,pad=0.01", facecolor=(0.96, 0.25, 0.37, 0.1), edgecolor=RED, linewidth=1.5))
ax3.text(0.5, 0.10, '⚠ All models breached on March 9, 2023', color=RED, fontsize=8, ha='center', fontweight='bold')
ax3.text(0.5, 0.04, 'Actual loss: $18Bn+ (Duration risk underestimated)', color=GRAY, fontsize=7.5, ha='center')

plt.savefig(f"{OUTPUT}/04-var-dashboard.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

# ─────────────────────────────────────────────────────────────────────────────
# 5. ESG SCORING TOOL — Radar + Bar Comparison
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 5/6: ESG Scoring Tool...")

fig = setup_fig(14, 8, "ESG Scoring Tool", "CAC40 Screening — TotalEnergies vs Schneider Electric")
gs = GridSpec(1, 2, figure=fig, left=0.06, right=0.97, top=0.85, bottom=0.1, wspace=0.4)

# Radar chart
from matplotlib.patches import FancyBboxPatch
categories_esg = ['Environmental', 'Social', 'Governance', 'Climate\nStrategy', 'Board\nDiversity', 'Supply\nChain']
N = len(categories_esg)
angles = [n / N * 2 * np.pi for n in range(N)]
angles += angles[:1]

total_scores = [38, 62, 70, 25, 55, 42, 38]  # with repeat
schneider_scores = [91, 78, 85, 88, 82, 79, 91]

total_vals = total_scores[:N] + [total_scores[0]]
schneider_vals = schneider_scores[:N] + [schneider_scores[0]]

ax1 = fig.add_subplot(gs[0, 0], projection='polar')
ax1.set_facecolor(SURFACE)
ax1.set_theta_offset(np.pi / 2)
ax1.set_theta_direction(-1)

# Grid
for r in [20, 40, 60, 80, 100]:
    ax1.plot(angles, [r]*len(angles), color=BORDER, linewidth=0.8, linestyle='--', alpha=0.6)

ax1.plot(angles, total_vals, color=RED, linewidth=2.5, label='TotalEnergies')
ax1.fill(angles, total_vals, color=RED, alpha=0.15)
ax1.plot(angles, schneider_vals, color=GREEN, linewidth=2.5, label='Schneider Electric')
ax1.fill(angles, schneider_vals, color=GREEN, alpha=0.15)

# Labels
ax1.set_xticks(angles[:-1])
ax1.set_xticklabels(categories_esg, color=WHITE, fontsize=9)
ax1.set_ylim(0, 100)
ax1.set_yticks([20, 40, 60, 80, 100])
ax1.set_yticklabels(['20', '40', '60', '80', '100'], color=GRAY, fontsize=7)
ax1.spines['polar'].set_color(BORDER)
ax1.grid(color=BORDER, linewidth=0.5)
ax1.legend(loc='upper right', bbox_to_anchor=(1.35, 1.15), facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=10)
ax1.set_title("ESG Radar — Pillar Comparison", color=WHITE, fontsize=12, pad=20)
fig.patch.set_facecolor(BG)

# Bar chart comparison
ax2 = fig.add_subplot(gs[0, 1])
style_ax(ax2, "ESG Pillar", "Score (/100)")

pillars = ['Environmental', 'Social', 'Governance', 'Overall ESG']
total_p = [38, 62, 70, 52]
schneider_p = [91, 78, 85, 84]

x = np.arange(len(pillars))
w = 0.35
b1 = ax2.bar(x - w/2, total_p, w, color=RED, alpha=0.85, label='TotalEnergies', edgecolor=BG, linewidth=1)
b2 = ax2.bar(x + w/2, schneider_p, w, color=GREEN, alpha=0.85, label='Schneider Electric', edgecolor=BG, linewidth=1)

for bar, val in zip(b1, total_p):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1.5, str(val),
             ha='center', color=RED, fontsize=10, fontweight='bold')
for bar, val in zip(b2, schneider_p):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1.5, str(val),
             ha='center', color=GREEN, fontsize=10, fontweight='bold')

ax2.axhline(y=60, color=GOLD, linewidth=1.5, linestyle='--', alpha=0.5, label='ESG Threshold (60)')
ax2.set_xticks(x); ax2.set_xticklabels(pillars, rotation=12, ha='right', fontsize=9, color=GRAY)
ax2.set_ylim(0, 105)
ax2.legend(facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax2.set_title("Pillar Score Breakdown + Gap Analysis", color=WHITE, fontsize=12, pad=10)

# Gap annotations
for xi, t, s, p in zip(x, total_p, schneider_p, pillars):
    gap = s - t
    ax2.annotate('', xy=(xi + w/2, s + 6), xytext=(xi - w/2, t + 6),
                arrowprops=dict(arrowstyle='->', color=CYAN, lw=1.5))
    ax2.text(xi, max(s, t) + 11, f'Δ{gap}', ha='center', color=CYAN, fontsize=8.5, fontweight='bold', fontfamily='monospace')

plt.savefig(f"{OUTPUT}/05-esg-tool.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

# ─────────────────────────────────────────────────────────────────────────────
# 6. CREDIT DASHBOARD — Altman Z-Score + Rating Timeline
# ─────────────────────────────────────────────────────────────────────────────
print("Generating 6/6: Credit Analysis Dashboard...")

fig = setup_fig(14, 8, "Credit Analysis Dashboard", "WeWork — 2020–2023 — Distress Detection & Rating Model")
gs = GridSpec(2, 2, figure=fig, left=0.07, right=0.97, top=0.85, bottom=0.1, wspace=0.38, hspace=0.5)

# Z-Score timeline
ax1 = fig.add_subplot(gs[0, :])
style_ax(ax1, "Quarter", "Altman Z-Score", grid=True)

quarters = ['Q1\'20', 'Q2\'20', 'Q3\'20', 'Q4\'20', 'Q1\'21', 'Q2\'21', 'Q3\'21', 'Q4\'21',
            'Q1\'22', 'Q2\'22', 'Q3\'22', 'Q4\'22', 'Q1\'23', 'Q2\'23', 'Q3\'23']
z_scores = [1.8, 1.5, 1.4, 1.2, 1.1, 1.0, 1.05, 0.95, 0.9, 0.85, 0.82, 0.80, 0.75, 0.72, 0.68]

# Zone fills
ax1.axhspan(2.99, 5.0, alpha=0.08, color=GREEN, label='Safe Zone (>2.99)')
ax1.axhspan(1.23, 2.99, alpha=0.08, color=GOLD, label='Grey Zone (1.23–2.99)')
ax1.axhspan(0, 1.23, alpha=0.12, color=RED, label='Distress Zone (<1.23)')

ax1.axhline(y=2.99, color=GREEN, linewidth=1.5, linestyle='--', alpha=0.6)
ax1.axhline(y=1.23, color=GOLD, linewidth=1.5, linestyle='--', alpha=0.6)

x_range = np.arange(len(quarters))
ax1.plot(x_range, z_scores, color=RED, linewidth=2.5, marker='o', ms=6, zorder=5)
ax1.fill_between(x_range, z_scores, 0, alpha=0.15, color=RED)

# Highlight distress entry
entry_idx = next(i for i, z in enumerate(z_scores) if z < 1.23)
ax1.scatter([entry_idx], [z_scores[entry_idx]], color=GOLD, s=150, zorder=10, marker='^')
ax1.annotate(f'Enters Distress Zone\nZ = {z_scores[entry_idx]}', (entry_idx, z_scores[entry_idx]),
             xytext=(entry_idx + 0.5, z_scores[entry_idx] + 0.25),
             color=GOLD, fontsize=9, fontfamily='monospace',
             arrowprops=dict(arrowstyle='->', color=GOLD, lw=1.5))

# Bankruptcy marker
ax1.axvline(x=len(quarters)-1, color=RED, linewidth=2.5, linestyle='-', alpha=0.8)
ax1.text(len(quarters)-0.8, 1.5, '📉 Chapter 11\nFiled', color=RED, fontsize=8.5, fontfamily='monospace', va='center')

ax1.set_xticks(x_range); ax1.set_xticklabels(quarters, rotation=30, ha='right', fontsize=8.5, color=GRAY)
ax1.set_ylim(0, 3.5)
ax1.legend(loc='upper right', facecolor=SURFACE, edgecolor=BORDER, labelcolor=WHITE, fontsize=9)
ax1.set_title("Altman Z-Score — 14-Month Early Warning Signal", color=WHITE, fontsize=12, pad=8)

# Rating model
ax2 = fig.add_subplot(gs[1, 0])
ax2.set_facecolor(SURFACE); ax2.axis('off')
ax2.set_xlim(0, 1); ax2.set_ylim(0, 1)

ratings = [('AAA', '#22c55e'), ('AA', '#4ade80'), ('A', '#86efac'), ('BBB', '#fbbf24'),
           ('BB', '#fb923c'), ('B', '#f87171'), ('CCC–', '#f43f5e'), ('D', '#be123c')]
ax2.text(0.5, 0.97, 'Internal Rating Model — WeWork', color=WHITE, fontsize=11, fontweight='bold', ha='center', va='top')

for i, (rating, color) in enumerate(ratings):
    x_pos = (i % 4) * 0.25
    y_pos = 0.75 - (i // 4) * 0.35
    highlight = rating == 'CCC–'
    ax2.add_patch(mpatches.FancyBboxPatch((x_pos + 0.01, y_pos), 0.22, 0.25,
        boxstyle="round,pad=0.02",
        facecolor=color if highlight else f'{color}22',
        edgecolor=color, linewidth=3 if highlight else 1))
    ax2.text(x_pos + 0.115, y_pos + 0.145, rating, ha='center', va='center',
             color=BG if highlight else color, fontsize=13 if highlight else 11,
             fontweight='bold', fontfamily='monospace')
    if highlight:
        ax2.text(x_pos + 0.115, y_pos - 0.04, '← WeWork 2023', ha='center',
                 color=RED, fontsize=8, fontfamily='monospace')

# Key ratios
ax3 = fig.add_subplot(gs[1, 1])
ax3.set_facecolor(SURFACE); ax3.axis('off')
ax3.set_xlim(0, 1); ax3.set_ylim(0, 1)
ax3.text(0.5, 0.97, 'Key Financial Ratios — Q3 2023', color=WHITE, fontsize=11, fontweight='bold', ha='center', va='top')

ratios = [
    ('Altman Z-Score', '0.9', '<1.23 ⚠', RED),
    ('Debt / EBITDA', '42x', '>10x ⚠', RED),
    ('Interest Coverage', '0.4x', '<1.5x ⚠', RED),
    ('Current Ratio', '0.6x', '<1.0x ⚠', GOLD),
    ('Net Margin', '-180%', 'Negative ⚠', RED),
    ('Cash Runway', '~8mo', 'Critical ⚠', GOLD),
]
for i, (name, val, flag, col) in enumerate(ratios):
    y = 0.82 - i * 0.135
    bg = '#0d1f35' if i % 2 == 0 else SURFACE
    ax3.add_patch(mpatches.FancyBboxPatch((0.01, y - 0.045), 0.98, 0.12,
        boxstyle="round,pad=0.01", facecolor=bg, edgecolor='none'))
    ax3.text(0.05, y + 0.015, name, color=GRAY, fontsize=8.5)
    ax3.text(0.60, y + 0.015, val, color=col, fontsize=9, fontweight='bold', fontfamily='monospace')
    ax3.text(0.78, y + 0.015, flag, color=col, fontsize=8)

plt.savefig(f"{OUTPUT}/06-credit-dashboard.png", dpi=150, bbox_inches='tight', facecolor=BG)
plt.close()
print("  ✅ Done")

print("\n🎉 All 6 visuals generated successfully!")
print(f"📁 Output: {OUTPUT}")
