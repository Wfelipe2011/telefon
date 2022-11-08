import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'outline-secondary-500' | 'ghost' | 'ghost-secondary' | 'custom';
}

export const Button = ({ children, variant = 'primary', className, ...rest }: IButton) => {
	const handlerVariant = {
		primary: 'bg-primary-500 hover:bg-primary-600 text-white',
		secondary: 'bg-secondary-500 hover:bg-secondary-600',
		outline: 'border border-primary-500 text-primary-500 hover:bg-primary-600 hover:text-white',
		'outline-secondary-500': 'border border-secondary-500 text-secondary-500 hover:bg-secondary-600 hover:text-white',
		ghost: 'text-primary-500 hover:bg-primary-600 hover:text-white',
		'ghost-secondary-500': 'text-secondary-500 hover:bg-secondary-600 hover:text-white',
		custom: '',
	};

	return (
		<button
			className={`w-2/3 h-10 brightness-100 hover:brightness-90 hover:shadow-lg transition-all ease-in-out duration-300 rounded-lg ${handlerVariant[variant as keyof typeof handlerVariant]} ${className} ${rest.disabled ? 'opacity-50 cursor-not-allowed bg-gray-300' : ''
				}`}
			{...rest}
		>
			{children}
		</button>
	);
};
