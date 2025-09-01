import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building2, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      navigate('/');
    }, 2000);
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = state.total;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ຈ່າຍເງີນ</h1>
          <p className="text-muted-foreground">ສໍາເລັດການຊື້ຂອງທ່ານຢ່າງປອດໄພເເລ້ວ</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-gold" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address (ອີເມວຂອງທ່ານ)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="pengsuelee99@gmail.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Shipping Address (ທີ່ຢູ່ຂອງທ່ານ)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name (ຊື່ເຕັມຂອງທ່ານ)</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Sue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name (ນາມສະກູນຂອງທ່ານ)</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Lee"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (ເບີໂທຂອງທ່ານ)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+856 (20) 91859172"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address (ທີ່ຢູ່ຂອງທ່ານ)</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="ບ້ານໂພນງາມໃຕ້ ເເຂວງຊຽງຂວາງ"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City(ເມືອງຂອງທ່ານ)</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="ເເປກ"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State (ສະຖານະຂອງທ່ານ)</Label>
                      <Input
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP Code (ລະຫັດປາສະຫນີ)</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Payment Method (ວິທີການຊໍາລະເງິນ)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-gold transition-colors">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <CreditCard className="w-5 h-5 text-gold" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        Credit Card
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-gold transition-colors">
                      <RadioGroupItem value="qr-code" id="qr-code" />
                      <Smartphone className="w-5 h-5 text-gold" />
                      <Label htmlFor="qr-code" className="flex-1 cursor-pointer">
                        QR Code Payment
                      </Label>
                    </div>


                  </RadioGroup>

                  {paymentMethod === 'credit-card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          required={paymentMethod === 'credit-card'}
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            required={paymentMethod === 'credit-card'}
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            required={paymentMethod === 'credit-card'}
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          required={paymentMethod === 'credit-card'}
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'qr-code' && (
                    <div className="p-6 text-center space-y-4">
                      <div className="w-48 h-48 bg-muted rounded-lg mx-auto flex items-center justify-center">
                        <img src="/img.jpg" alt="QR Code" className="w-48 h-48" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ສະແກນລະຫັດ QR ດ້ວຍແອັບການຈ່າຍເງິນມືຖືຂອງເຈົ້າ
                      </p>
                    </div>
                  )}


                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-border sticky top-8">
                <CardHeader>
                  <CardTitle>ສະຫລຸດການສັ່ງຊື້</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.product.name}</p>
                          <p className="text-muted-foreground">ຈໍານວນ: {item.quantity}</p>
                          {(item.selectedColor || item.selectedSize) && (
                            <p className="text-muted-foreground text-xs">
                              {item.selectedColor && `Color: ${item.selectedColor}`}
                              {item.selectedColor && item.selectedSize && ', '}
                              {item.selectedSize && `Size: ${item.selectedSize}`}
                            </p>
                          )}
                        </div>
                        <p className="font-medium text-foreground">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-muted-foreground">
                      <span>ຜົນລວມທັງຫມົດ</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>ຄ່າຂົນສົ່ງ</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>ພາສີ</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>ລວມຍອດທັງຫມົດ</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-gold hover:bg-gradient-premium"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        ກົດຊື້ອໍເດີ
                      </>
                    )}
                  </Button>

                  {/* Trust Badges */}
                  <div className="pt-4 space-y-2 text-center text-sm text-muted-foreground">
                    <p>🔒 ຂໍ້ມູນການຈ່າຍເງິນຂອງທ່ານປອດໄພ</p>
                    <p>📦 ການຂົນສົ່ງຟຣີ & ກັບຄືນງ່າຍ</p>
                    <p>⭐ ກັບຄືນງ່າຍພາຍໃນ 30 ມື້</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;