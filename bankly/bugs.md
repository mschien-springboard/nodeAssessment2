# Bugs

- Bug 1: /users/:username PATCH: no validation for fields, allowing update of username, password, is_admin.
- Bug 2: /auth/login: Doesn't use await User.Authenticate.
- Bug 3: /users/:username DELETE: Doesn't use await User.Delete
- Bug 4: /users/:username PATCH: requires admin instead of just the name user logged in as req.params.username.
- Bug 5: /users/ GET: Lists too much information, more than mentioned in docstring
- Bug 6: auth middleware: Was using decode instead of verify jwt.
- Minor bugs: no ability of passing _token in req.headers, should also use json schema for validation. "token" instead of "_token" is used a couple times where most routes look for "_token" in the req.body