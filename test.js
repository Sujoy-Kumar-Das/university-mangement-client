export const adminPaths2 = [
  {
    name: "Admin Dashboard",
    path: "/admin/dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "<CreateStudent />",
      },
      {
        name: "Create Faculty",
        path: "admin/create-faculty",
        element: "<CreateFaculty />",
      },
    ],
  },
];

const func = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({ path: item.path, element: item.element });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }
  return acc;
}, []);

console.log(func);
