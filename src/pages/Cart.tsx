import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { state, updateQuantity, removeFromCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">ການສັ່ງຊື້ຂອງທ່ານຍັງບໍ່ມີ   
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ເຫັນສີນຄ້າທີ່ມີຄຸນນະພາບສູງແລະເລືອກຊື້ເລື່ອງໃນຮ້ານຂາຍຂອງເຮົາ
              </p>
              <Button asChild size="lg" className="bg-gradient-gold hover:bg-gradient-premium">
                <Link to="/shop">
                  ກົດໄປຊື້ສິນຄ້າ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ລາຍການສີນຄ້າ</h1>
          <p className="text-muted-foreground">
            {state.items.length} {state.items.length === 1 ? 'ລາຍການ' : 'ລາຍການ'} ສີນຄ້າໃນການສັ່ງຊື້ຂອງທ່ານ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="p-6 border-border">
                <CardContent className="p-0">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground text-lg">
                          {item.product.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {item.product.description}
                      </p>

                      {/* Selected Options */}
                      <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                        {item.selectedColor && (
                          <span>Color: <span className="text-foreground">{item.selectedColor}</span></span>
                        )}
                        {item.selectedSize && (
                          <span>Size: <span className="text-foreground">{item.selectedSize}</span></span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-12 text-center font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-foreground">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-border sticky top-8">
              <CardContent className="p-0 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">ສະຫລຸດການສັ່ງຊື້</h2>
                
                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>ຜົນລວມທັງຫມົດ</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>ຄ່າຂົນສົ່ງ</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>ພາສີ</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold text-foreground">
                  <span>ລວມຍອດທັງຫມົດ</span>
                  <span>${(state.total * 1.08).toFixed(2)}</span>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-gold hover:bg-gradient-premium" size="lg">
                    <Link to="/checkout">
                     ດຳເນີນການຊຳລະເງີນ
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link to="/shop">ສືບຕໍ່ຊື້ເຄື່ອງ</Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 space-y-2 text-center">
                  <p className="text-sm text-muted-foreground">
                    🔒 ຈ່າຍເງິນທີ່ປອດໄພດ້ວຍການເຂົ້າລະຫັດ SSL
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📦 ສົ່ງຟຣີທຸກອໍເດີ
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🔄 ກັບຄືນງ່າຍພາຍໃນ 30 ມື້
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;