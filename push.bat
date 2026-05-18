@echo off
REM Westwood Consulting — one-command push helper
REM Usage: double-click this file, or run `push.bat` from CMD inside the project folder

cd /d "%~dp0"

echo ====================================
echo  Westwood Consulting site push
echo ====================================
echo.

git status

echo.
set /p msg="Commit message (or press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site

echo.
echo Staging all changes...
git add .

echo.
echo Committing with message: "%msg%"
git commit -m "%msg%"

echo.
echo Pushing to GitHub...
git push

echo.
echo ====================================
echo  Done. GitHub Pages will rebuild
echo  in about 60 seconds.
echo ====================================
echo.
pause
