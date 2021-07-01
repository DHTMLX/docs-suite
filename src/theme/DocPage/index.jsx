import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import { matchPath } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import styles from './styles.module.scss';

function DocSearchVersionHeader({ version, isLast }) {
	const versions = isLast ? [version, 'latest'] : [version];
	return (
		<Head>
			<meta
				name="docsearch:version"
				content={
					// See https://github.com/facebook/docusaurus/issues/3391#issuecomment-685594160
					versions.join(',')
				}
			/>
		</Head>
	);
}

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
};

function DocPageContent({ currentDocRoute, versionMetadata, children }) {
	const { siteConfig, isClient } = useDocusaurusContext();
	const { permalinkToSidebar, docsSidebars, version, isLast } = versionMetadata;
	const sidebarName = permalinkToSidebar[currentDocRoute.path];
	const sidebar = docsSidebars[sidebarName];

	useEffect(() => {
		if (!window.disqus_enabled) {
			var disqus_shortname = 'dhxdocumentation';
			var dsq = document.createElement('script');
			dsq.type = 'text/javascript';
			dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

			window.disqus_enabled = true;
		}
	});

	resetDisqusPlugin(currentDocRoute.path);

	return (
		<>
			<DocSearchVersionHeader version={version} isLast={isLast}/>
			<Layout key={isClient}>
				<div className={styles.docPage}>
					{sidebar && (
						<div className={styles.docSidebarContainer} role="complementary">
							<DocSidebar
								key={
									sidebarName
								}
								sidebar={sidebar}
								path={currentDocRoute.path}
								sidebarCollapsible={
									siteConfig.themeConfig?.sidebarCollapsible ?? true
								}
							/>
						</div>
					)}
					<main className={styles.docMainContainer}>
						<MDXProvider components={MDXComponents}>{children}</MDXProvider>
						<div id='disqus_thread' className={styles.disqusThread}></div>
					</main>
				</div>
			</Layout>
		</>
	);
}

const DocPage = props => {
	const {
		route: { routes: docRoutes },
		versionMetadata,
		location,
	} = props;
	const currentDocRoute = docRoutes.find((docRoute) =>
		matchPath(location.pathname, docRoute),
	);

	if (!currentDocRoute) {
		return <NotFound {...props} />;
	}

	return (
		<DocPageContent
			currentDocRoute={currentDocRoute}
			versionMetadata={versionMetadata}>
			{renderRoutes(docRoutes)}
		</DocPageContent>
	);
}

export default DocPage;
