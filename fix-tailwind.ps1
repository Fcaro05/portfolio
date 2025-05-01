$filesToSearch = Get-ChildItem -Path .\src -Recurse -Include *.tsx,*.ts,*.css
foreach ($file in $filesToSearch) {
    $content = Get-Content -Path $file.FullName
    $newContent = $content -replace 'bg-secondary/', 'bg-gray-800/'
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Modified file: $($file.FullName)"
    }
} 