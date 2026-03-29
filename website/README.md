# TechnoIT - IT Solutions & Business Services Website

A modern, responsive website for an IT solutions and business services company. The website showcases the company's services, portfolio, team, and more with a clean and professional design.

## 📋 Features

- Responsive design that works on all devices
- Modern and professional UI/UX
- Service pages with detailed information
- Portfolio showcase with project details
- Team presentation section
- Blog section with article pages
- Contact form with Google Maps integration
- Smooth animations powered by AOS (Animate On Scroll)

## 🚀 Technology Stack

- HTML5 & CSS3
- JavaScript (ES6+)
- [Flask](https://flask.palletsprojects.com/) - Python web framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Font Awesome](https://fontawesome.com/) - Icon toolkit

## 📂 Directory Structure

```
website2/
├── assets/               # Static assets
│   ├── css/              # CSS stylesheets
│   ├── js/               # JavaScript files
│   ├── images/           # Images and icons
│
├── templates/            # HTML templates
│   ├── index.html        # Home page
│   ├── about.html        # About page
│   ├── services.html     # Services overview
│   ├── services-details.html  # Individual service details
│   ├── service-cloud.html  # Cloud service details
│   ├── portfolio.html    # Portfolio overview
│   ├── portfolio-details.html  # Individual project details
│   ├── blog.html         # Blog overview
│   ├── blog-details.html  # Individual blog post
│   ├── contact.html      # Contact page
│
├── docs/                 # Documentation
├── app.py                # Flask application
├── requirements.txt      # Python dependencies
├── update_paths.py       # Path updating utility
└── README.md             # Project documentation
```

## 🖼️ Image Requirements

| Image | Size | Format | Description |
|-------|------|--------|-------------|
| logo_150x40.png | 150x40 | PNG | Company logo with transparency |
| hero_800x600.jpg | 800x600 | JPG | Hero section main image |
| about-img_600x500.jpg | 600x500 | JPG | About us section image |
| services-1_300x200.svg | 300x200 | SVG | Web Development service icon |
| services-2_300x200.svg | 300x200 | SVG | Mobile Development service icon |
| services-3_300x200.svg | 300x200 | SVG | Cloud Solutions service icon |
| portfolio-1_400x300.jpg | 400x300 | JPG | E-commerce project portfolio image |
| portfolio-2_400x300.jpg | 400x300 | JPG | Banking app portfolio image |
| portfolio-3_400x300.jpg | 400x300 | JPG | Cloud migration portfolio image |
| testimonial-1_80x80.jpg | 80x80 | JPG | Male client testimonial headshot |
| testimonial-2_80x80.jpg | 80x80 | JPG | Female client testimonial headshot |
| cloud-header_800x400.jpg | 800x400 | JPG | Cloud services detail page header |

## 🛠️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/website2.git
   cd website2
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```bash
   python app.py
   ```

5. Open your browser and navigate to `http://localhost:5000`

## 📝 Image Guidelines for Designers

- Use a consistent style and color scheme across all images
- Primary brand color: #025ADD (blue)
- Secondary colors: white, light blue (#e9f0ff)
- Images should be optimized for web (compressed to reduce load time)
- Use professional, high-quality visuals
- Provide alt text for all images for accessibility
- Consider responsive design (images should look good on all device sizes)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px and above)
- Laptop (992px-1199px)
- Tablet (768px-991px)
- Mobile (below 768px)

## 🌐 Browser Compatibility

The website is tested and compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

[Your Name](https://github.com/yourusername) 