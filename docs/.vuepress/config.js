module.exports = {
	base: '/docs/',
	title: 'Mafindo Public API',
	description: 'Mafindo Documentation',
	theme: 'apidoc',
	themeConfig: {
		displayAllHeaders: true,
		smoothScroll: true,
		activeHeaderLinks: true,
		nextLinks: false,
    	prevLinks: false,
		sidebar: [
			['/', 'Get Started'],
			{
			  title: 'API V2',
			  path: '/v2/',
			  collapsable: false,
			  sidebarDepth: 1,
			},
			{
				title: 'API V1',
				path: '/v1/',
				collapsable: false,
				sidebarDepth: 1
			},
		],
		logo: '/assets/img/logo.png',
		nav: [
			{ text: 'Contact', link: 'https://turnbackhoax.id/tentang-kami/kontak-kami/' },
		],
		
		repo: 'mafindo/docs',
		repoLabel: 'Contribute!',

		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'master',
		editLinkText: 'Help us improve this page!'
	}
};
