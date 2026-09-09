@echo off
title EPPE TARUN - Portfolio Deployment
cls
echo =======================================================
echo          EPPE TARUN - 3D PORTFOLIO DEPLOYMENT          
echo =======================================================
echo.
echo [1/2] Building production bundle...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed. Please check errors above.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/2] Select your target deployment platform:
echo -------------------------------------------------------
echo 1. Surge.sh       -^> Instant live at https://eppetarun.surge.sh (Fastest, 1-command)
echo 2. Vercel         -^> Live at https://eppetarun.vercel.app
echo 3. Netlify        -^> Live at https://eppetarun.netlify.app
echo 4. GitHub Pages   -^> Push to GitHub and deploy automatically
echo -------------------------------------------------------
set /p choice="Enter your choice (1, 2, 3, or 4): "

if "%choice%"=="1" (
    echo.
    echo Deploying to https://eppetarun.surge.sh ...
    echo Note: If prompted, enter your email and choose a password.
    call npx surge dist --domain eppetarun.surge.sh
    echo.
    echo Deployment completed! Check: https://eppetarun.surge.sh
) else if "%choice%"=="2" (
    echo.
    echo Deploying to Vercel...
    call npx vercel
) else if "%choice%"=="3" (
    echo.
    echo Deploying to Netlify...
    call npx netlify deploy --prod --dir=dist
) else if "%choice%"=="4" (
    echo.
    set /p repo="Enter your GitHub repo URL (e.g., https://github.com/eppetarun/portfolio.git): "
    git remote remove origin 2>nul
    git remote add origin %repo%
    git branch -M main
    git push -u origin main
    echo.
    echo Pushed to GitHub! GitHub Actions will build and deploy to GitHub Pages.
) else (
    echo Invalid choice.
)

echo.
pause
