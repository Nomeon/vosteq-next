import { paraglide } from "@inlang/paraglide-next/plugin"
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.datocms-assets.com"
			}
		]
	}
};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./paraglide"
	},
	...nextConfig
});
