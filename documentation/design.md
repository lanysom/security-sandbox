# Security Sandbox
**Design document**

[Logo](logo.png)

## Colors
Background: #010713

### 1. Basic Structure
- **Homepage**: Displays a welcome message and links to various sections like blogs, login, registration.
- **Blog Page**: List of blog posts that users can click to read more. Include a comment section with a form to submit comments.
- **Login Page**: Simple login form.
- **Registration Page**: Registration form for new users.
- **Profile Page**: User profile that can be edited after logging in.

[Web Site Map](webmap.png)

### 2. Vulnerabilities to Introduce
- **SQL Injection**: 
  - Do not sanitize inputs in the blog comments, search functions, or login queries.
  - Example: Using straightforward SQL queries that concatenate user input directly into the query string.

- **Cross-Site Scripting (XSS)**:
  - Allow blog posts and comments to include unescaped HTML or JavaScript.
  - Example: `<script>alert('XSS');</script>` could be added to a blog comment to display an alert.

- **Cross-Site Request Forgery (CSRF)**:
  - No CSRF tokens in forms. Any state-changing action (like posting a comment or changing a password) could be forged from another site.
  - Example: Forms that can be submitted from any source without verification.

- **Session Management Flaws**:
  - Use predictable session IDs or long-lasting session cookies without secure or HttpOnly flags.
  - Example: Simple numerical sequence for session IDs.

- **Weak Authentication**:
  - Implement weak password policies and plain text password storage.
  - Example: Allow simple passwords like "12345" and store them as plain text in the database.

### 3. Technical Stack Suggestions
- **Frontend**: Basic HTML and JavaScript without any real security measures. Inline styles and scripts.
- **Backend**: A simple PHP or Node.js server handling forms and database interactions.
- **Database**: MySQL or SQLite. The simpler, the easier to manipulate with SQL injection.

### 4. Additional Poor Design Choices
- **No HTTPS**: Run the website on HTTP to highlight the risks of unencrypted connections.
- **Verbose Error Messages**: Display detailed error messages that give hints about the database or server configuration.

### 5. Implementation Tips
- **Logging**: Excessive and insecure logging of user actions and system errors, potentially visible to users.
- **Misconfigurations**: Leave default configurations unchanged (e.g., admin/admin for admin login).
- **No Input Validation**: Accept all inputs without checks on length, type, or format.

