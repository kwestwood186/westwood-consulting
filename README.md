# Westwood Consulting

The website for Westwood Consulting — a job search coaching business by Kevin Westwood. Static site, no backend, hosts on GitHub Pages for free.

## File structure

```
westwood-consulting/
├── index.html              # Home page
├── application-tools.html  # Resume vs. cover letter
├── interview-skills.html   # 20-question interview prep
├── salary-negotiation.html # Salary research + negotiation
├── speaking.html           # Booking page for speaking engagements
├── coaching.html           # Paid 1:1 coaching booking flow
├── about.html              # Kevin's bio
├── blog.html               # Blog landing page (articles coming soon)
├── styles.css              # All site styling
├── script.js               # Q&A collapsibles + mobile nav
├── .nojekyll               # Tells GitHub Pages not to run Jekyll
├── assets/
│   └── images/
│       └── kevin.jpg       # Headshot — drop in manually
├── STYLE_GUIDE.md          # Brand and styling reference
├── INTERVIEW_QA_DRAFT.md   # Q&A source content (not deployed)
└── README.md               # This file
```

## Things you need to replace before going live

Search the codebase for these placeholders and replace them with your real values:

| Find | Replace with | Where it lives |
|---|---|---|
| `hello@westwoodconsulting.com` | Your real email | Every page (footer + contact links) |
| `data-replace="appointment-schedule-url"` link | Your Google Appointment Schedule URL | `coaching.html` |
| Tip jar `href="#"` | Your tip jar link (e.g., PayPal.me or a Buy Me a Coffee URL) | Every page footer |
| `Add kevin.jpg to /assets/images/` placeholder | Drop kevin.jpg into `/assets/images/` | Auto-fixes once file is present |

## How to update content

All pages are plain HTML. To change any text, open the relevant `.html` file in any text editor (VS Code, Notepad++, or even Notepad) and edit. No build step required.

To add a new blog post:
1. Make a copy of `blog.html` and rename it (e.g., `blog-resume-tips.html`)
2. Replace the body content with your article
3. Add a link to it from `blog.html`

## How to deploy to GitHub Pages

### One-time setup

1. **Create a GitHub account** if you don't have one: github.com
2. **Install GitHub Desktop** (easier than command-line git): desktop.github.com
3. **Create a new repository** on GitHub:
   - Click the green "New" button on your GitHub homepage
   - Name it: `westwood-consulting` (or whatever you like — but `<username>.github.io` will make it your root domain on GitHub)
   - Make it Public
   - Don't initialize with a README (you already have one)
   - Click "Create repository"

### Push the site files

Using GitHub Desktop:

1. Open GitHub Desktop
2. File → "Add Local Repository" → select this folder (`Westwood Consulting`)
3. If prompted that it's not a git repo yet, click "create a repository"
4. Click "Publish repository" in the top right
5. Choose the GitHub account you set up
6. Uncheck "Keep this code private" (must be public for free GitHub Pages)
7. Click "Publish"

### Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click "Settings" (top right of the repo nav)
3. In the left sidebar, click "Pages"
4. Under "Source," select the branch named `main` (or `master`)
5. Folder: `/ (root)`
6. Click "Save"
7. Wait 1–2 minutes for GitHub to build and deploy your site
8. Refresh the Pages settings page — you'll see a green box with your live URL: `https://<your-username>.github.io/westwood-consulting/`

### Set up a custom domain (optional)

If you want `westwoodconsulting.com` instead of the GitHub URL:

1. Buy the domain from any registrar (Namecheap, Google Domains, GoDaddy — all fine)
2. In your domain registrar's DNS settings, add these records:
   - A records pointing `@` to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME record pointing `www` to `<your-username>.github.io`
3. In your GitHub repo Settings → Pages, enter your custom domain in the "Custom domain" field
4. Wait 15 minutes to a few hours for DNS to propagate
5. Once it's ready, check the "Enforce HTTPS" box

### How to update the live site after changes

1. Make your edits to any HTML file
2. Open GitHub Desktop
3. You'll see your changes listed in the left panel
4. Write a brief description in the "Summary" box (e.g., "Updated coaching page pricing")
5. Click "Commit to main"
6. Click "Push origin" in the top bar
7. GitHub Pages will automatically rebuild the site within 1–2 minutes

## Tip jar setup

The tip jar buttons throughout the site currently link to `#`. To make them real:

**Easiest option — Buy Me a Coffee**:
1. Sign up at buymeacoffee.com
2. Get your link (looks like `buymeacoffee.com/yourname`)
3. Search the codebase for `tip-jar` and replace `href="#"` with your link

**Alternative — PayPal.me**:
1. Set up a PayPal.me link at paypal.me
2. Use that URL instead

## Coaching session payment flow

The site currently directs clients to:
1. Pick a time using your Google Appointment Schedule
2. Pay via Interac e-Transfer (Request Money from your bank) or PayPal

To configure:
- **Google Appointment Schedule**: Set this up at calendar.google.com → click "Create" → "Appointment schedule". Once you have your booking page URL, paste it into the `data-replace="appointment-schedule-url"` link in `coaching.html`.
- **Interac e-Transfer**: Once a client books, log into your bank online → "Send Money" → "Request Money" → enter their email and the session amount. They get a notification to send funds.
- **PayPal backup**: Optional. Set up a PayPal Business account if you want to send invoices via PayPal as an alternative.

## Notes

- The site uses no tracking, no analytics, no cookies. If you want analytics later, add Plausible (paid, privacy-friendly) or Google Analytics.
- No backend, no database. All content is in the HTML files.
- The site works on all modern browsers and is responsive on mobile.
