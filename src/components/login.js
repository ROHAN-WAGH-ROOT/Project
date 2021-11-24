import React, { useState } from 'react';
import ForgotPassword from './forgotPassword';
export default function Login() {
	const [ value, setValue ] = useState('');
	return (
		<div>
			<div>
				<h1>Login</h1>
				<div style={{ textAlign: 'center' }}>
					<label for="username">username:</label>
					<input type="text" value={value} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<label for="password">password:</label>
					<input type="password" value={value} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<button type="submit">login</button>
				</div>
				<div style={{ textAlign: 'center',marginLeft:300 }}>
					<a href={<ForgotPassword />}>forgot your password?</a>
				</div>
			</div>
			<div>
				<h1>Create Account</h1>
				<div style={{ textAlign: 'center' }}>
					<label for="username">username:</label>
					<input type="text" value={value} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<label for="password">password:</label>
					<input type="password" value={value} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<button type="submit" value={value} onClick={() => {}}>
						Create Account
					</button>
				</div>
			</div>
		</div>
	);
}
