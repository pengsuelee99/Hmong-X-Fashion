import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 1, selectedColor, selectedSize);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "ລຶບອອກຈາກລາຍການທີ່ຢາກໄດ້ແລ້ວ" : "ເພີ່ມໃສ່ລາຍການທີ່ຢາກໄດ້ແລ້ວ",
      description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <Card className={`group overflow-hidden border-border hover:shadow-card-premium transition-all duration-300 ${className}`}>
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={toggleWishlist}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-gold text-gold' : 'text-muted-foreground'}`} />
          </Button>

          {/* Quick Add Button - Shows on Hover */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-gold hover:bg-gradient-premium text-primary font-medium"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              ກົດສັ່ງຊື້
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 space-y-4">
          <div>
            <Badge variant="secondary" className="text-xs mb-2 bg-premium-light text-premium-gray">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Colors</p>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-gold shadow-gold' : 'border-border hover:border-muted-foreground'
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'gold' ? '#D4AF37' : 
                                       color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                       color.toLowerCase() === 'rose' ? '#E91E63' :
                                       color.toLowerCase() === 'black' ? '#000000' :
                                       color.toLowerCase() === 'white' ? '#FFFFFF' :
                                       color.toLowerCase() === 'brown' ? '#8B4513' :
                                       color.toLowerCase() === 'navy' ? '#000080' :
                                       color.toLowerCase() === 'cream' ? '#F5F5DC' :
                                       color.toLowerCase() === 'burgundy' ? '#800020' :
                                       color.toLowerCase() === 'tortoise' ? '#8B4513' :
                                       '#6B7280'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Options */}
          {product.sizes && product.sizes.length > 1 && (
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Size</p>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? 'bg-gradient-gold' : ''}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;