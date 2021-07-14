import React, { useEffect } from 'react';
import styles from './styles.module.scss';

function resetDisqusPlugin(path) {
	if (typeof DISQUS === 'undefined') {
		setTimeout(() => resetDisqusPlugin(path), 500);
	} else {
		if (window.disqus_last == path) return;
		window.disqus_last = path;

		DISQUS.reset({
			reload: true,
			config: function () {
				this.page.identifier = path;
				this.page.url = "https://docs.dhtmlx.com" + path;
				this.page.title = "";
			}
		});
	}
}

export default function Disqus() {
	useEffect(() => {
		var disqus_shortname = 'dhxdocumentation';
		var dsq = document.createElement('script');
		dsq.type = 'text/javascript';
		dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		resetDisqusPlugin(location.pathname);
	});

	return <div id='disqus_thread' className={styles.disqusThread}/>;
}
