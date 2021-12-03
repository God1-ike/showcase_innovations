import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useRedirectByRole (...conditions) {
    const [, setLocation] = useLocation();
    useEffect(() => {
        const role = sessionStorage.getItem('role');
        const redirectPath = role ? `/${role}` : '/';
        // setLocation(redirectPath);
    }, conditions);
}