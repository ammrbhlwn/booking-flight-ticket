import { CHECKOUT_KEY, type Checkout } from '@/lib/utils';
import { useEffect, useState } from 'react';

const useCheckoutData = () => {
  const [data, setData] = useState<Checkout | null>(null);

  useEffect(() => {
    if (typeof globalThis !== 'undefined' && globalThis.sessionStorage) {
      const value = globalThis.sessionStorage.getItem(CHECKOUT_KEY);

      if (value) {
        setData(JSON.parse(value));
      }
    }
  }, []);

  return {
    data,
  };
};

export default useCheckoutData;
