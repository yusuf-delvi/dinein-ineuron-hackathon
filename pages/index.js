import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home({}) {
	const {
		query: { table },
	} = useRouter();

	return <div>Selected table: {table}</div>;
}
