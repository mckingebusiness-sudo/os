/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	transpilePackages: ["@lifeos/shared", "@lifeos/companion", "@lifeos/garden"],
}

export default nextConfig
