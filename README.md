# 🏠 BOLES Smart Home E-commerce Platform

A modern, **full-featured e-commerce platform** for smart home devices built with Next.js 15, featuring real-time currency conversion to Nigerian Naira, comprehensive admin dashboard, pagination system, and a complete database management system.

![BOLES Smart Home](https://ext.same-assets.com/596243380/3736915175.png)

## ✨ Key Features

### 🛍️ Complete E-commerce Functionality
- **98 Smart Home Products** across 6 comprehensive categories
- **Advanced Pagination System** - 15 products per page with smart navigation
- **Shopping Cart & Wishlist** - Full cart management with quantity controls
- **Product Comparison** - Compare multiple products side-by-side
- **Advanced Search & Filter** - Product search with auto-suggestions
- **User Authentication** - Secure sign-up/sign-in with role-based access
- **Product Reviews & Ratings** - Customer feedback system
- **Product Image Galleries** - Multiple images per product

### 🔐 Admin Dashboard System
- **Complete Admin Panel** - Full product and user management
- **Product Management** - Edit products, prices, inventory, and images  
- **Image Upload System** - Multiple image uploads with preview
- **Database Management** - Full CRUD operations for all data
- **User Management** - Admin and user role controls
- **Real-time Analytics** - Dashboard with statistics and metrics
- **Stock Management** - Inventory tracking and low-stock alerts

### 📄 Advanced Pagination System
- **15 Products Per Page** - Optimized for performance and UX
- **Smart Page Navigation** - Next/Previous buttons with page numbers
- **Intelligent Page Display** - Ellipsis for large page counts  
- **Auto-reset on Filter Changes** - Seamless navigation experience
- **Page Range Display** - "Showing X to Y of Z products"
- **Smooth Scrolling** - Enhanced user experience

### 💰 Real-time Currency Conversion
- **Live USD to NGN Conversion** - Updated hourly
- **Multiple API Sources** - Redundant APIs for 99% uptime
- **Smart Caching System** - Optimized API usage
- **Fallback Protection** - Offline rate protection
- **Live Status Indicator** - Real-time rate display in header

### 🎨 Modern UI/UX Design
- **Responsive Design** - Mobile-first approach
- **Professional Product Images** - High-quality photos
- **shadcn/ui Components** - Modern, accessible UI library
- **Smooth Animations** - Engaging user interactions
- **Consistent Branding** - BOLES brand colors and styling

## 📱 Product Categories (98 Products Total)

1. **Smart Lighting** (18 products) - LED bulbs, strips, dimmers
2. **Security Cameras** (16 products) - 4K cameras, doorbell cams, monitoring
3. **Smart Locks** (16 products) - Fingerprint, keypad, app-controlled
4. **Sensors & Detectors** (16 products) - Motion, smoke, door/window sensors
5. **Control Panels** (16 products) - Touch panels and smart hubs
6. **Smart Speakers** (16 products) - Voice-controlled audio systems

## 🔐 Demo Accounts

### Regular User Account
```
Email: demo@bolesenterprise.io
Password: demo123
```

### Admin Account  
```
Email: admin@boles.com
Password: admin123
```

*Admin account provides full access to dashboard, product management, and database operations.*

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Language**: TypeScript for complete type safety
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Context API with hooks
- **Database**: File-based in-memory system with local storage
- **Authentication**: Role-based auth with session management
- **Currency API**: ExchangeRate-API + Open Exchange Rates
- **Linting**: Biome for code quality
- **Package Manager**: Bun for fast installations
- **Deployment**: Netlify-ready configuration

## 💻 Installation

### Prerequisites
- Node.js 18+ or Bun
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/mostiock/boles-smart-home-platform.git
cd boles-smart-home-platform

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Build the application
bun run build

# Start production server
bun run start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Optional: Add your preferred exchange rate API keys for higher rate limits
EXCHANGE_RATE_API_KEY=your_api_key_here
```

### Currency System
The currency conversion system works out of the box with public APIs. For production use with high traffic, consider:

1. **ExchangeRate-API**: Free tier with 1,500 requests/month
2. **Open Exchange Rates**: Backup API with free tier
3. **Custom fallback rate**: ₦1,589.77 (as of May 2025)

## 📊 Current Exchange Rate

**1 USD = ₦1,589.77** (Live rate from XE.com)

*Rates update automatically every hour*

## 🛒 Key Features in Detail

### Admin Dashboard
- **Product Management**: Edit all product details, images, and inventory
- **User Management**: Control user accounts and roles
- **Analytics Dashboard**: Real-time statistics and metrics
- **Image Upload**: Multiple image uploads with drag-and-drop
- **Database Operations**: Full CRUD operations for all data

### Pagination System
- **Smart Navigation**: Previous/Next buttons with page numbers
- **Optimized Performance**: Only 15 products loaded per page
- **Intelligent Display**: Ellipsis for large page counts
- **Auto-reset**: Page resets when filters change
- **Range Display**: Shows current product range

### Shopping Experience
- **Advanced Cart**: Quantity controls and live total calculations
- **Product Details**: Comprehensive information with image galleries
- **Search Functionality**: Find products with auto-suggestions
- **Category Browsing**: Navigate by smart home device categories
- **Comparison Tool**: Compare multiple products feature-by-feature

### Authentication System
- **Role-based Access**: User and Admin roles with different permissions
- **Secure Authentication**: Protected routes and session management
- **Demo Accounts**: Pre-configured accounts for testing
- **Admin Protection**: Admin routes protected by middleware

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured shopping and admin experience
- **Tablet**: Touch-optimized interface with all features
- **Mobile**: Mobile-first design with optimized navigation

## 🔐 Security Features

- **Input Validation**: Comprehensive form validation
- **XSS Protection**: Sanitized user inputs
- **HTTPS Ready**: Secure data transmission
- **API Security**: Protected external API calls
- **Role-based Access**: Admin route protection
- **Session Management**: Secure authentication flow

## 🚀 Automatic Deployment

This project is configured for **automatic deployment** across multiple platforms with comprehensive CI/CD pipeline:

### 🏆 Primary Platform: Vercel (Recommended)
- ✅ **Native Next.js Support** - Built by the Next.js team
- ✅ **Zero Configuration** - Works out of the box
- ✅ **Preview Deployments** - Automatic PR previews  
- ✅ **Edge Performance** - Global CDN optimization
- ✅ **Built-in Analytics** - Performance monitoring

### 🌐 Alternative Platforms
- **Netlify** - Excellent static hosting with form handling
- **GitHub Pages** - Free backup hosting solution

### ⚙️ Automatic Deployment Features
- **Production**: Auto-deploy on push to `main` branch
- **Preview**: Auto-deploy for pull requests  
- **Quality Checks**: Automated linting and type checking
- **Build Optimization**: Cached dependencies and artifacts
- **Notifications**: Deployment status in PR comments

### 🚀 Quick Setup
```bash
# Check deployment status
bun run deploy:check

# Force new deployment  
bun run deploy:force

# Build locally
bun run build
```

📖 **Complete Setup Guide**: [AUTOMATIC-DEPLOYMENT.md](./AUTOMATIC-DEPLOYMENT.md)

> **🎉 Automatic deployment is now live!** Any push to the main branch will trigger automatic deployment across all platforms.

## 📈 Performance Features

- **Optimized Loading**: Pagination reduces initial load time
- **Image Optimization**: Efficient image loading and display
- **Smart Caching**: Currency rates cached for 1 hour
- **Lazy Loading**: Components loaded as needed
- **Bundle Optimization**: Next.js automatic optimizations

## 🛠️ API Documentation

### Database Operations
```typescript
// Product CRUD operations
await createProduct(productData);
await updateProduct(id, updates);
await deleteProduct(id);
await getProducts();

// User management
await getUserById(id);
await updateUserRole(id, role);
```

### Currency Conversion
```typescript
// Get current exchange rate
const rate = await getCurrentExchangeRate();

// Convert price to NGN
const ngnPrice = convertToNGN(usdPrice, rate);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Features Status

### ✅ Completed Features
- [x] **Complete e-commerce platform** with 98 products
- [x] **Advanced pagination system** (15 products per page)
- [x] **Full admin dashboard** with product management
- [x] **Database management system** with CRUD operations
- [x] **User authentication** with role-based access
- [x] **Real-time currency conversion** (USD to NGN)
- [x] **Shopping cart and wishlist** functionality
- [x] **Product comparison** system
- [x] **Image upload system** for admin
- [x] **Responsive design** for all devices
- [x] **Search and filter** functionality
- [x] **Product reviews and ratings**

### 🔮 Future Enhancements
- [ ] Payment gateway integration (Paystack, Flutterwave)
- [ ] Order management and tracking system
- [ ] Email notifications for orders
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Real-time chat support
- [ ] Bulk product operations

## 📞 Support

For support and inquiries:
- **Email**: support@boles-enterprise.com
- **Website**: [boles-enterprise.com](https://boles-enterprise.com)
- **GitHub**: [mostiock/boles-smart-home-platform](https://github.com/mostiock/boles-smart-home-platform)

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful and accessible UI components
- **Next.js Team**: Amazing React framework
- **Tailwind CSS**: Utility-first CSS framework
- **ExchangeRate-API**: Reliable currency conversion
- **Vercel**: Excellent development experience
- **TypeScript**: Type safety and developer experience

---

**Built with ❤️ by BOLES Enterprise Team**

*A complete, production-ready e-commerce platform for smart home devices with advanced features and modern technology stack.*