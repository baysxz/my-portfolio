const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4'>
      {title}
    </Link>
  );
};

export default NavLink;