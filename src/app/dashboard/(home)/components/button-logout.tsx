'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { logout } from '../actions';

const handleLogout = async (formData: FormData): Promise<void> => {
  await logout();
};

const ButtonLogout = () => {
  return (
    <div className="space-y-2">
      <form action={handleLogout}>
        <Button
          type="submit"
          variant={'destructive'}
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </form>
    </div>
  );
};

export default ButtonLogout;
