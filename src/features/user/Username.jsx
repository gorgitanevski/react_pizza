import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <p className="hidden text-sm font-semibold md:block md:text-3xl">
      {username}
    </p>
  );
}

export default Username;