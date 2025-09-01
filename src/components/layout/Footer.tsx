import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-light border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Hmong X Fashion
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
             ສີນຄ້າຄູນນະພາບດີເເລະດີໄຊຫລູຫລາມາສັນຜັກປະສົບການຄວາມຫລູຫລາຂອງສີນຄ້າຂອງເຮົາກັນໃສ່ເເລ້ວຮູ້ສືກສະບາຍ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'ຮ້ານ', href: '/shop' },
                { name: 'ກ່ຽວກັບເຮົາ', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Cart', href: '/cart' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <div className="space-y-3">
              {[
                'Shipping & Returns',
                'Size Guide',
                'Care Instructions',
                'FAQ'
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ສາມາດຕິດຕໍ່ໄດ້ທາງ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <span>pengsuelee99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <span>+856 (20) 91859172</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                <span>ບ້ານໂພນງາມໃຕ້ ເມືອງເເປກ ເເຂວງ ຊຽງຂວາງ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Hmong X fashion. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;