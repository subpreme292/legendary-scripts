<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Null Obfuscator</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      color: #1f2937;
    }
    .container {
      max-width: 36rem;
      background: white;
      border-radius: 1.5rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      margin: 1rem;
      transition: transform 0.3s ease;
    }
    .container:hover {
      transform: translateY(-5px);
    }
    .error, .success {
      padding: 1rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      transition: opacity 0.3s ease;
    }
    .error {
      background: #fee2e2;
      color: #dc2626;
      border-left: 4px solid #dc2626;
    }
    .success {
      background: #d1fae5;
      color: #047857;
      border-left: 4px solid #047857;
    }
    .input-file, .input-textarea, .input-select {
      border: 2px solid #e5e7eb;
      border-radius: 0.75rem;
      width: 100%;
      padding: 0.75rem;
      margin-top: 0.5rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      background: #f9fafb;
    }
    .input-file:focus, .input-textarea:focus, .input-select:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
      outline: none;
    }
    .input-textarea {
      resize: vertical;
      min-height: 10rem;
      font-family: 'Courier New', monospace;
    }
    .button {
      background: #3b82f6;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      width: 100%;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.3s ease, transform 0.2s ease;
    }
    .button:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
    .button:active {
      transform: translateY(0);
    }
    .label {
      font-size: 0.875rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
      display: block;
    }
    .header {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(to right, #3b82f6, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: 2rem;
    }
    .footer {
      text-align: center;
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 1.5rem;
    }
    @media (max-width: 640px) {
      .container {
        margin: 1rem;
        padding: 1.5rem;
      }
      .header {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="header">Null Obfuscator</h1>
    
      <div class="error">Obfuscation failed: Obfuscation process failed with exit code 1. STDOUT: "[0m[35mPROMETHEUS: [0mApplying Obfuscation Pipeline to C:\Users\ADMINI~1\AppData\Local\Temp\2\tmp-10592-7fmKQr9buPwd-.lua ...
[0m[35mPROMETHEUS: [0mParsing ...
[0m[31mPROMETHEUS: Parsing Error at Position 11:44, expected a ";" or a ","[0m" STDERR: "./bin/luajit.exe: ./lua/logger.lua:54: Parsing Error at Position 11:44, expected a ";" or a ","
stack traceback:
	[C]: in function 'error'
	./lua/logger.lua:54: in function 'errorCallback'
	./lua/logger.lua:57: in function 'error'
	./lua/prometheus\parser.lua:962: in function 'tableOrFunctionLiteral'
	./lua/prometheus\parser.lua:713: in function 'expressionUnary'
	./lua/prometheus\parser.lua:667: in function 'expressionMulDivMod'
	./lua/prometheus\parser.lua:645: in function 'expressionAddSub'
	./lua/prometheus\parser.lua:634: in function 'expressionStrCat'
	./lua/prometheus\parser.lua:590: in function 'expressionComparision'
	./lua/prometheus\parser.lua:579: in function 'expressionAnd'
	./lua/prometheus\parser.lua:568: in function 'expression'
	./lua/prometheus\parser.lua:503: in function 'exprList'
	./lua/prometheus\parser.lua:474: in function 'statement'
	./lua/prometheus\parser.lua:171: in function 'block'
	./lua/prometheus\parser.lua:149: in function 'parse'
	./lua/prometheus\pipeline.lua:178: in function 'apply'
	./lua/cli.lua:148: in main chunk
	[C]: at 0x7ff751634950"</div>
    
    
    <form action="/obfuscate" method="POST" enctype="multipart/form-data" class="space-y-6">
      <div>
        <label class="label">Upload Lua File (max 40KB)</label>
        <input type="file" name="file" accept=".lua" class="input-file">
      </div>
      <div>
        <label class="label">Or Paste Lua Code</label>
        <textarea name="code" class="input-textarea" placeholder="-- Your Lua code here"></textarea>
      </div>
      <div>
        <label class="label">Select Obfuscation Preset</label>
        <select name="preset" class="input-select">
          <option value="Weak">Weak</option>
          <option value="Medium">Medium</option>
        </select>
      </div>
      <button type="submit" class="button">Obfuscate Code</button>
    </form>
    <p class="footer">
      For advanced features, try the standalone version of Null Obfuscator.
    </p>
  </div>
</body>
</html>