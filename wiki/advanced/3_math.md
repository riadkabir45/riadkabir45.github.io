---
title: "Mathematical Expressions and LaTeX"
description: "Learn to write mathematical equations, formulas, and expressions in Markdown using LaTeX syntax"
date: "2024-12-01"
author: "Wiki Team"
tags: 
  - markdown
  - math
  - latex
  - equations
  - formulas
category: "advanced"
featured: false
---

# Mathematical Expressions and LaTeX

Mathematical expressions add precision and clarity to technical documentation. Learn to write beautiful equations using LaTeX syntax in Markdown.

## Inline Math

Use single dollar signs for inline mathematical expressions:

```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
Einstein's famous equation is $E = mc^2$.
The area of a circle is $A = \pi r^2$ where $r$ is the radius.
```

**Result:**
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
Einstein's famous equation is $E = mc^2$.
The area of a circle is $A = \pi r^2$ where $r$ is the radius.

## Block Math

Use double dollar signs for displayed mathematical expressions:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

**Result:**
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Basic Operators and Symbols

### Arithmetic Operations

```markdown
$$
\begin{align}
a + b &= \text{addition} \\
a - b &= \text{subtraction} \\
a \times b &= \text{multiplication} \\
a \div b &= \text{division} \\
a \pm b &= \text{plus or minus}
\end{align}
$$
```

**Result:**
$$
\begin{align}
a + b &= \text{addition} \\
a - b &= \text{subtraction} \\
a \times b &= \text{multiplication} \\
a \div b &= \text{division} \\
a \pm b &= \text{plus or minus}
\end{align}
$$

### Comparison Operators

```markdown
$$a < b \quad a \leq b \quad a = b \quad a \geq b \quad a > b \quad a \neq b$$
```

**Result:**
$$a < b \quad a \leq b \quad a = b \quad a \geq b \quad a > b \quad a \neq b$$

## Fractions and Roots

```markdown
$$
\frac{a}{b} \quad \frac{x^2 + 2x + 1}{x + 1} \quad \sqrt{x} \quad \sqrt[3]{x} \quad \sqrt[n]{x^n}
$$
```

**Result:**
$$
\frac{a}{b} \quad \frac{x^2 + 2x + 1}{x + 1} \quad \sqrt{x} \quad \sqrt[3]{x} \quad \sqrt[n]{x^n}
$$

## Superscripts and Subscripts

```markdown
$$
x^2 \quad x^{n+1} \quad x_i \quad x_{i,j} \quad a_1^2 + a_2^2 = c^2
$$
```

**Result:**
$$
x^2 \quad x^{n+1} \quad x_i \quad x_{i,j} \quad a_1^2 + a_2^2 = c^2
$$

## Greek Letters

### Lowercase
```markdown
$$\alpha \beta \gamma \delta \epsilon \zeta \eta \theta \iota \kappa \lambda \mu$$
$$\nu \xi \omicron \pi \rho \sigma \tau \upsilon \phi \chi \psi \omega$$
```

**Result:**
$$\alpha \beta \gamma \delta \epsilon \zeta \eta \theta \iota \kappa \lambda \mu$$
$$\nu \xi \omicron \pi \rho \sigma \tau \upsilon \phi \chi \psi \omega$$

### Uppercase
```markdown
$$\Alpha \Beta \Gamma \Delta \Epsilon \Zeta \Eta \Theta \Iota \Kappa \Lambda \Mu$$
$$\Nu \Xi \Omicron \Pi \Rho \Sigma \Tau \Upsilon \Phi \Chi \Psi \Omega$$
```

**Result:**
$$\Alpha \Beta \Gamma \Delta \Epsilon \Zeta \Eta \Theta \Iota \Kappa \Lambda \Mu$$
$$\Nu \Xi \Omicron \Pi \Rho \Sigma \Tau \Upsilon \Phi \Chi \Psi \Omega$$

## Calculus

### Derivatives

```markdown
$$
\frac{d}{dx}f(x) = f'(x) \quad \frac{\partial}{\partial x}f(x,y) \quad \nabla f
$$

$$
\frac{d^2}{dx^2}f(x) = f''(x) \quad \frac{\partial^2 f}{\partial x^2}
$$
```

**Result:**
$$
\frac{d}{dx}f(x) = f'(x) \quad \frac{\partial}{\partial x}f(x,y) \quad \nabla f
$$

$$
\frac{d^2}{dx^2}f(x) = f''(x) \quad \frac{\partial^2 f}{\partial x^2}
$$

### Integrals

```markdown
$$
\int f(x) dx \quad \int_a^b f(x) dx \quad \oint f(x) dx
$$

$$
\iint f(x,y) dx dy \quad \iiint f(x,y,z) dx dy dz
$$
```

**Result:**
$$
\int f(x) dx \quad \int_a^b f(x) dx \quad \oint f(x) dx
$$

$$
\iint f(x,y) dx dy \quad \iiint f(x,y,z) dx dy dz
$$

### Limits

```markdown
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 \quad \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$
```

**Result:**
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 \quad \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

## Summations and Products

```markdown
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2} \quad \prod_{i=1}^n i = n!
$$

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x \quad \prod_{p \text{ prime}} \frac{1}{1-p^{-s}} = \zeta(s)
$$
```

**Result:**
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2} \quad \prod_{i=1}^n i = n!
$$

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x \quad \prod_{p \text{ prime}} \frac{1}{1-p^{-s}} = \zeta(s)
$$

## Matrices and Vectors

```markdown
$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

$$
\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} \quad
\det(\mathbf{A}) = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$
```

**Result:**
$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

$$
\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} \quad
\det(\mathbf{A}) = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

## Complex Equations

### Schrödinger Equation

```markdown
$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)
$$
```

**Result:**
$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)
$$

### Maxwell's Equations

```markdown
$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$
```

**Result:**
$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

### Fourier Transform

```markdown
$$
\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

$$
\mathcal{F}^{-1}\{F(\omega)\} = f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$
```

**Result:**
$$
\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

$$
\mathcal{F}^{-1}\{F(\omega)\} = f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

## Statistics and Probability

```markdown
$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)} \quad \text{(Bayes' Theorem)}
$$

$$
\mu = \frac{1}{n}\sum_{i=1}^n x_i \quad \sigma^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \mu)^2
$$

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad \text{(Normal Distribution)}
$$
```

**Result:**
$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)} \quad \text{(Bayes' Theorem)}
$$

$$
\mu = \frac{1}{n}\sum_{i=1}^n x_i \quad \sigma^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \mu)^2
$$

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad \text{(Normal Distribution)}
$$

## Sets and Logic

```markdown
$$
A \cup B \quad A \cap B \quad A \setminus B \quad A^c \quad \emptyset \quad \mathbb{N} \quad \mathbb{R}
$$

$$
\forall x \in \mathbb{R}, \exists y \in \mathbb{R} : y > x
$$

$$
A \subset B \quad A \subseteq B \quad |A| = n \quad A \times B
$$
```

**Result:**
$$
A \cup B \quad A \cap B \quad A \setminus B \quad A^c \quad \emptyset \quad \mathbb{N} \quad \mathbb{R}
$$

$$
\forall x \in \mathbb{R}, \exists y \in \mathbb{R} : y > x
$$

$$
A \subset B \quad A \subseteq B \quad |A| = n \quad A \times B
$$

## Special Functions

```markdown
$$
\Gamma(n) = \int_0^{\infty} t^{n-1} e^{-t} dt \quad \text{for } n > 0
$$

$$
\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1-p^{-s}}
$$

$$
\text{erf}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2} dt
$$
```

**Result:**
$$
\Gamma(n) = \int_0^{\infty} t^{n-1} e^{-t} dt \quad \text{for } n > 0
$$

$$
\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1-p^{-s}}
$$

$$
\text{erf}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2} dt
$$

## Best Practices

### Formatting Guidelines

1. **Use descriptive text** around equations
2. **Number important equations** for reference
3. **Define variables** clearly
4. **Group related equations** using align environment
5. **Use appropriate spacing** with `\quad` and `\qquad`

### Common Patterns

#### Definition with conditions:
```markdown
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$
```

**Result:**
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$

#### Multi-step derivation:
```markdown
$$
\begin{align}
(x + y)^2 &= (x + y)(x + y) \\
&= x(x + y) + y(x + y) \\
&= x^2 + xy + yx + y^2 \\
&= x^2 + 2xy + y^2
\end{align}
$$
```

**Result:**
$$
\begin{align}
(x + y)^2 &= (x + y)(x + y) \\
&= x(x + y) + y(x + y) \\
&= x^2 + xy + yx + y^2 \\
&= x^2 + 2xy + y^2
\end{align}
$$

## Practice Exercise

Write mathematical expressions for:

1. The binomial theorem
2. A 3x3 matrix equation
3. A definite integral with limits
4. A probability density function
5. A system of linear equations using cases

---

*Previous: [Code Blocks](advanced/2_code_blocks) | Next: [Complete Syntax Guide](reference/1_complete_syntax)*