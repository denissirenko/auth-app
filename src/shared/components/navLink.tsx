import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';

const activeProps = {
  style: { textDecoration: 'underline', color: '#3E63DD' },
};

interface NavLinkProps {
  to: string;
  children: ReactNode;
  dataTestid: string;
  className?: string;
}

export default function NavLink({
  to,
  children,
  className = '',
  dataTestid,
}: NavLinkProps) {
  return (
    <Link
      to={to}
      activeProps={activeProps}
      className={`hover:text-blue-700 ${className}`}
      data-testid={dataTestid}
    >
      {children}
    </Link>
  );
}
