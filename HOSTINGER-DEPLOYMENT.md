# Hostinger Deployment

## Build

1. Run `npm install`
2. Run `npm run build`
3. Upload the contents of `out/` to the Hostinger public web directory

## Files included

- Static export in `out/`
- `.htaccess` copied from `public/.htaccess`
- `404.html`
- `sitemap.xml`
- `robots.txt`

## DNS and SSL

- Point the domain to the correct Hostinger hosting target
- Keep MX, SPF, DKIM, and DMARC records intact
- Force the canonical non-www domain: `https://lifecarephysiotherepy.com`
- Confirm SSL is active before testing redirects

## Credentials still required

- FTP or SFTP host
- Username
- Password
- Port
- Remote directory
