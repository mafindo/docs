module.exports = {
	base: '/docs/',
	title: 'Mafindo Public API',
	description: 'Mafindo Documentation',
	theme: 'apidoc',
	themeConfig: {
		displayAllHeaders: true,
		smoothScroll: true,
		activeHeaderLinks: false,
		nextLinks: false,
    	prevLinks: false,
		sidebar: [
			['/', 'Get Started'],
			{
			  title: 'API V2',
			  path: '/v2/',      // optional, which should be a absolute path.
			  collapsable: false, // optional, defaults to true
			  sidebarDepth: 1,    // optional, defaults to 1
			},
			{
				title: 'API V1',   // required
				path: '/v1/',      // optional, which should be a absolute path.
				collapsable: false, // optional, defaults to true
				sidebarDepth: 1,    // optional, defaults to 1
			  //   children: [
			  // 	'/intro'
			  //   ]
			},
		],
		logo: '../assets/img/logo.png',
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
