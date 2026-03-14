function buildTestUsers(names, roles) {
  return names.map((name, index) => {
    // Transform name to username: lowercase and spaces to underscores
    const username = name.toLowerCase().replace(/\s+/g, '_');
    
    // Create email: take the first part of name (split by space)
    const emailPrefix = name.split(' ')[0].toLowerCase();
    const email = `${emailPrefix}@playwrightbatch.com`;
    
    // Return the new object
    return {
      username: username,
      email: email,
      role: roles[index] // Match role by the same index
    };
  });
}

// Example Usage:
const names = ["Narasimharao", "Anusha"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
console.log(users);