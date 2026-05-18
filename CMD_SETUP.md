# Push from CMD instead of the GitHub web UI

One-time setup, then it's three commands (or one double-click) to push any change.

---

## One-time setup

### 1. Check that Git is installed

Open **Command Prompt** (search "cmd" in the Start menu) and run:

```
git --version
```

- If you see something like `git version 2.40.0` — you're good, skip to step 2.
- If you see `'git' is not recognized` — install Git for Windows from https://git-scm.com/download/win, then come back.

### 2. Install GitHub CLI (for easy authentication)

Easiest install via Windows Package Manager:

```
winget install GitHub.cli
```

Or download the installer from https://cli.github.com.

After install, **close and reopen CMD** so it picks up the new tool.

### 3. Authenticate with GitHub

```
gh auth login
```

Follow the prompts:
1. **What account?** → GitHub.com
2. **Preferred protocol?** → HTTPS
3. **Authenticate Git with your GitHub credentials?** → Yes
4. **How?** → Login with a web browser
5. Copy the one-time code shown, press Enter, paste the code into the browser tab that opens, click Authorize

You're now authenticated. This persists — you won't need to do it again.

### 4. Connect your project folder to the GitHub repo

In CMD, navigate to your project folder:

```
cd "C:\Users\KevinWestwood\OneDrive - PATH Employment Services\Documents\Claude\Projects\Westwood Consulting"
```

Check whether it's already a Git repo:

```
git status
```

- If it shows files (modified, staged, etc.) — already set up, skip ahead.
- If it says `fatal: not a git repository` — run these three commands:

```
git init
git remote add origin https://github.com/kwestwood186/westwood-consulting.git
git branch -M main
git pull origin main --allow-unrelated-histories
```

If `git pull` shows merge conflicts (it might, since you've uploaded files via the web UI), open the conflicting files in any text editor, look for `<<<<<<<` markers, manually pick which version to keep, save, then:

```
git add .
git commit -m "Resolve initial merge"
```

---

## Daily workflow (after setup)

You have two options — pick whichever you prefer.

### Option A — Double-click `push.bat`

I created a `push.bat` file in your project folder. Just double-click it. It:
1. Shows you what's changed
2. Asks for a commit message (or uses "Update site" if you press Enter)
3. Stages, commits, and pushes everything
4. Tells you when it's done

That's it. One double-click, every time you want to deploy.

### Option B — Run three commands manually

```
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages will rebuild within 60 seconds.

---

## Useful Git commands

| Command | What it does |
|---|---|
| `git status` | See what's changed since the last commit |
| `git diff` | See the exact changes line-by-line |
| `git log --oneline -10` | See the last 10 commits |
| `git pull` | Get any changes I made (if I edited files on my side) |
| `git push` | Send your local changes to GitHub |

---

## OneDrive heads-up

Your project folder lives inside OneDrive. OneDrive sometimes locks files while syncing, which can confuse Git. If you ever see a Git error mentioning "permission denied" or "file in use," pause OneDrive sync (right-click the OneDrive icon in your taskbar → Pause syncing) before pushing, then resume after.

For a more bulletproof setup later, you could move the repo out of OneDrive entirely (e.g., to `C:\Users\KevinWestwood\Projects\westwood-consulting\`). Not urgent unless you hit problems.

---

## If you hit a problem

The most common errors and fixes:

| Error | Fix |
|---|---|
| `fatal: not a git repository` | You're in the wrong folder. `cd` to the project folder first. |
| `Permission denied (publickey)` | You're trying SSH but set up HTTPS. Run `gh auth login` again, choose HTTPS. |
| `Updates were rejected because the remote contains work` | Someone (or you, via the web UI) committed something not on your local. Run `git pull` first, then push again. |
| `error: failed to push some refs` | Same as above. `git pull` first. |

If something genuinely weird happens, screenshot it and paste it — I'll diagnose.
