#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

EnvGet, SystemRoot, SystemRoot
Run %SystemRoot%\system32\WindowsPowerShell\v1.0\powershell.exe  %A_ScriptDir%\..\UploadScript\update_stocks.ps1

ExitApp