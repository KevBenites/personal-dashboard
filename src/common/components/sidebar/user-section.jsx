import { userStore } from '../../store/userStore';

export function UserSection() {
  const { user } = userStore();

  return (
    <div className="flex gap-5 px-4 py-2 bg-black/35 border-2 border-slate-700/60 rounded-2xl">
      <img
        className="w-21 h-24 rounded-full"
        src={user.avatar}
        alt="Avatar del usuario"
      />
      <div className="flex flex-col justify-center">
        <span className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</span>
        <span className="text-sm italic">{user.role}</span>
      </div>
    </div>
  );
}
