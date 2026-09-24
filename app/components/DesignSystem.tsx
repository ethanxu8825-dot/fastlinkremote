import Link from "next/link";
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

function classes(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const containerWidths = {
  standard: "max-w-content",
  wide: "max-w-wide",
  narrow: "max-w-reading",
} as const;

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  width?: keyof typeof containerWidths;
}

export function Container({
  width = "standard",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={classes(
        "mx-auto w-full px-page",
        containerWidths[width],
        className,
      )}
      {...props}
    />
  );
}

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: "default" | "alternate";
  width?: keyof typeof containerWidths;
  innerClassName?: string;
}

export function Section({
  tone = "default",
  width = "standard",
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={classes(
        "border-b border-border",
        tone === "alternate" ? "bg-section" : "bg-page",
        className,
      )}
      {...props}
    >
      <Container width={width} className={classes("py-section", innerClassName)}>
        {children}
      </Container>
    </section>
  );
}

export type EyebrowProps = ComponentPropsWithoutRef<"p">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={classes(
        "text-label font-bold uppercase tracking-[var(--type-label-letter-spacing)] text-accent",
        className,
      )}
      {...props}
    />
  );
}

export interface SectionHeadingProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={classes(
        "max-w-reading",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-heading-2 font-extrabold tracking-[var(--type-heading-letter-spacing)] text-primary-text">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-body-large text-muted-text">{description}</p>
      ) : null}
    </div>
  );
}

const buttonVariants = {
  primary:
    "border-brand bg-brand text-page shadow-[0_0_36px_rgb(34_211_238_/_0.2)] hover:border-brand-hover hover:bg-brand-hover",
  secondary:
    "border-border bg-transparent text-primary-text hover:border-brand-hover hover:text-brand-hover",
} as const;

export interface ButtonLinkProps
  extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: keyof typeof buttonVariants;
  className?: string;
  disabled?: boolean;
}

export function ButtonLink({
  variant = "primary",
  className,
  disabled = false,
  children,
  ...props
}: ButtonLinkProps) {
  const buttonClassName = classes(
    "inline-flex min-h-12 items-center justify-center rounded-control border px-7 py-3 text-button font-bold",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--transition-duration-max)] ease-[var(--transition-easing)]",
    "motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page",
    buttonVariants[variant],
    className,
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={buttonClassName}>
        {children}
      </span>
    );
  }

  return (
    <Link className={buttonClassName} {...props}>
      {children}
    </Link>
  );
}

export interface ContentCardProps extends ComponentPropsWithoutRef<"article"> {
  interactive?: boolean;
}

export function ContentCard({
  interactive = false,
  className,
  ...props
}: ContentCardProps) {
  return (
    <article
      className={classes(
        "rounded-card border border-border bg-surface p-7 shadow-card",
        interactive &&
          "transition-[background-color,border-color,box-shadow,transform] duration-[var(--transition-duration-max)] ease-[var(--transition-easing)] motion-safe:hover:-translate-y-1 hover:border-brand/35 hover:bg-surface-elevated",
        className,
      )}
      {...props}
    />
  );
}

export interface CtaSectionProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  supplemental?: ReactNode;
  actions: ReactNode;
}

export function CtaSection({
  eyebrow,
  title,
  description,
  supplemental,
  actions,
  className,
  ...props
}: CtaSectionProps) {
  return (
    <section className={classes("bg-page", className)} {...props}>
      <Container width="wide" className="py-section text-center">
        <div className="rounded-feature border border-brand/20 bg-[radial-gradient(circle_at_top,rgb(34_211_238_/_0.12),transparent_38%),var(--ds-color-surface)] px-page py-section shadow-elevated">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="mx-auto max-w-reading text-heading-2 font-extrabold tracking-[var(--type-heading-letter-spacing)]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-reading text-body-large text-secondary-text">
            {description}
          </p>
          {supplemental ? (
            <div className="mt-5 text-body-large font-bold text-accent">
              {supplemental}
            </div>
          ) : null}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {actions}
          </div>
        </div>
      </Container>
    </section>
  );
}
