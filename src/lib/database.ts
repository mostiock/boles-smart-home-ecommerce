import { products as initialProducts } from "@/data/products";
import type { Product } from "@/types/product";

// Database interface
export interface DatabaseProduct extends Product {
  createdAt: string;
  updatedAt: string;
  imageUploads?: string[]; // For admin uploaded images
}

export interface User {
  id: string;
  email: string;
  password: string; // In real app, this would be hashed
  firstName: string;
  lastName: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

// Simple file-based database simulation
class DatabaseService {
  private products: DatabaseProduct[] = [];
  private users: User[] = [];
  private initialized = false;

  constructor() {
    this.initializeDatabase();
  }

  private initializeDatabase() {
    if (this.initialized) return;

    // Initialize with existing products
    this.products = initialProducts.map((product) => ({
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      imageUploads: [],
    }));

    // Create default users
    this.users = [
      {
        id: "admin-001",
        email: "admin@boles.com",
        password: "admin123", // In real app, hash this
        firstName: "Admin",
        lastName: "User",
        role: "admin",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "user-001",
        email: "demo@bolesenterprise.io",
        password: "demo123", // In real app, hash this
        firstName: "Demo",
        lastName: "User",
        role: "user",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    this.initialized = true;
  }

  // Product methods
  getAllProducts(): DatabaseProduct[] {
    return [...this.products];
  }

  getProductById(id: string): DatabaseProduct | null {
    return this.products.find((p) => p.id === id) || null;
  }

  getProductsByCategory(category: string): DatabaseProduct[] {
    if (category === "all") return this.getAllProducts();
    return this.products.filter((p) => p.category === category);
  }

  createProduct(
    productData: Omit<DatabaseProduct, "id" | "createdAt" | "updatedAt">,
  ): DatabaseProduct {
    const newProduct: DatabaseProduct = {
      ...productData,
      id: `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(
    id: string,
    updates: Partial<DatabaseProduct>,
  ): DatabaseProduct | null {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    this.products[index] = {
      ...this.products[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    return this.products[index];
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }

  // User methods
  getAllUsers(): User[] {
    return this.users.filter((u) => u.role !== "admin"); // Don't expose admin users
  }

  getUserById(id: string): User | null {
    return this.users.find((u) => u.id === id) || null;
  }

  getUserByEmail(email: string): User | null {
    return this.users.find((u) => u.email === email) || null;
  }

  createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): User {
    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updates: Partial<User>): User | null {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    this.users[index] = {
      ...this.users[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    return this.users[index];
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }

  // Authentication methods
  authenticateUser(email: string, password: string): User | null {
    const user = this.getUserByEmail(email);
    if (!user || user.password !== password) return null;
    return user;
  }

  // Statistics for admin dashboard
  getStatistics() {
    return {
      totalProducts: this.products.length,
      totalUsers: this.users.filter((u) => u.role === "user").length,
      totalAdmins: this.users.filter((u) => u.role === "admin").length,
      productsByCategory: {
        "control-panels": this.products.filter(
          (p) => p.category === "control-panels",
        ).length,
        "smart-lighting": this.products.filter(
          (p) => p.category === "smart-lighting",
        ).length,
        "security-cameras": this.products.filter(
          (p) => p.category === "security-cameras",
        ).length,
        "smart-speakers": this.products.filter(
          (p) => p.category === "smart-speakers",
        ).length,
        "smart-locks": this.products.filter((p) => p.category === "smart-locks")
          .length,
        "sensors-detectors": this.products.filter(
          (p) => p.category === "sensors-detectors",
        ).length,
      },
      lowStockProducts: this.products.filter((p) => (p.stockCount || 0) < 10)
        .length,
    };
  }
}

// Export singleton instance
export const db = new DatabaseService();

// Export as default for convenience
export default db;
