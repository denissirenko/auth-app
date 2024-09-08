import { Avatar, Button } from '@radix-ui/themes';

interface UserProfileProps {
  signOut: () => void;
}

export default function UserProfile({ signOut }: UserProfileProps) {
  return (
    <div className="flex gap-4 items-center ml-auto">
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
      />
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}
