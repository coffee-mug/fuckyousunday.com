export default ({ title, children }) => (
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fuck you sunday - random posts about data and tech from some sunday's anxious guy</title>
</head>
<body class="font-serif text-xl antialiased">
    <header>
        <h1 className="pl-4 mb-0 text-3xl text-blue-500">Fuck you sunday</h1>
        <h2 className="pl-4 mt-0 text-2xl text-black-500/50">Data, tech and unfinished projects</h2>
    </header>
  { children }  
</body>
</html>
);