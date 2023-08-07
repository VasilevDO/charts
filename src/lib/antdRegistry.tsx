'use client';

import React, {useState} from 'react';
import {StyleProvider, createCache, extractStyle} from '@ant-design/cssinjs';
import {useServerInsertedHTML} from 'next/navigation';

export default function StyledComponentsRegistry({children}: {children: React.ReactNode}) {
	const [cache] = useState(() => createCache());

	useServerInsertedHTML(() => (
		<script
			dangerouslySetInnerHTML={{
				__html: `</script>${extractStyle(cache)}<script>`,
			}}
		/>
	));

	return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
