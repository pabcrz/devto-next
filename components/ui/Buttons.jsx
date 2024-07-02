import Link from "next/link";

export function PrimaryButton(props) {
  const { styles, name } = props;
  return (
    <Link
      href="/login"
      className={`border rounded-md border-primary text-primary p-2 px-4 hover:bg-primary hover:text-tertiary ${styles}`}
    >
      {name ? name : "Create account"}
    </Link>
  );
}

export function SecondaryButton(props) {
  const { styles, name } = props;
  return (
    <Link
      href="/login"
      className={`text-textPrimary rounded-md p-2 px-4 hover:bg-secondary hover:text-primary md:block ${styles}`}
    >
      {name ? name : "Login"}
    </Link>
  );
}
