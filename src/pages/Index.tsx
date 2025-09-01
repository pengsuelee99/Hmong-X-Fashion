import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ui/product-card';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-image.png';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  ຍີນດີຕ້ອນຮັບ<br />
                  <span className="block bg-gradient-gold bg-clip-text text-transparent">
                    Hmong X Fashion
                  </span>
                  shop ຂອງເຮົາ
                </h1>
                <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                  ການະສິນຄ້າທີ່ມີຄຸນນະພາບສູງ ແລະ ອອກແບບໂດຍນັກອອກແບບຊາວໂລກ, ເພາະເຮົາເຊື່ອໃນວ່າ ທ່ານນໍາໃຊ້ ສານເນື້ອ ແລະ ຄໍາເນາ ຂອງເຮົາ. ມີເສື້ອຫາຍຫຼາຍ ແລະ ອຸປະກອນໃນການເລືອກໃຊ້.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-gold hover:bg-gradient-premium text-primary font-semibold">
                  <Link to="/shop">
                    ກົົດໄປຊື້ສິນຄ້າ
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:border-gold">
                  <Link to="/about">ເບີ່ງກ່ຽວກັບເຮົາ</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <Crown className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-sm font-medium text-foreground">ງານລະດັບໂປລ</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <Truck className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-sm font-medium text-foreground">ບໍລິການ ສົ່ງຟຮີທົ່ວປະເທດ</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-sm font-medium text-foreground">ຮັບປະກັນຕະຫຼອດການໃຊ້ງານ</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-scale-in">
                <img
                  src={heroImage}
                  alt="Tubkoob Premium Collection"
                  className="rounded-2xl shadow-premium w-full h-auto"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-border"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              ສີນຄ້າລະດັບດີເເລະມີຄຸນນະພາບ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ຜົນງາມທີ່ຄັບສັນມາຢ່າງດີເເລະມີຄຸນນະພາບສູງເເຕ່ລະຢ່າງໄດ້ຄັບສັນມາຢ່າງພີຖີພີຖັນໃນທຸກການອອກເເບບເເລະລາຍລະອຽດ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-border hover:border-gold">
              <Link to="/shop">
                ເບິ່ງສີນຄ້າທັງໝົດ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-premium-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              ສິ່ງທີ່ລູກຄ້າຂອງເຮົາເວົ້າ
            </h2>
            <p className="text-xl text-muted-foreground">
              ສັນຜັກປະສົບການເເລະຄວາມເເຕກຕ່າງຂອງລູກຄ້າຂອງເຮົາ ແລະ ຮູ້ສືກສະບາຍໃນການໃຊ້ສີນຄ້າຂອງເຮົາ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "ລູກຄ້າຂອງເຮົາ",
                review: "ຄຸນນະພາບສີນຄ້າດີຫຼາຍມີຄວາມເອົາໃຈໃສ່ທຸກລາຍລະອຽດ. ການບໍລິການກໍດີສຸດຍອດ!",
                rating: 5,
                product: "ເສື້ອຍຶດລະດັບດີ"
              },
              {
                name: "ລຸກຄ້າຂອງເຮົາ",
                review: "ຂ້ອຍເປັນລູກຄ້າມາໄດ້ຫນຶ່ງປີເເລ້ວທຸກເທື່ອທີ່ຂ້ອຍຊື້ຂອງກໍເຮັດໃຫ້ເກີນຄວາມຄາດໝາຍເເນະນຳເລິຍຮ້ານນີ້!",
                rating: 5,
                product: "ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ"
              },
              {
                name: "ລູກຄ້າຂອງເຮົາ",
                review: "ງານລະດັບດີຫຼາຍສີນຄ້າທຸກຢ່າງສະເເດງໃຫ້ເຫັນວ່າເປັນຜົນງານທີ່ດີເອົາໃຈໃສ່ກັບສີນຄ້າ. ຂ້ອຍເເນະນຳເລີຍ!",
                rating: 5,
                product: "ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border shadow-card-premium">
                <CardContent className="p-8 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">ຊື້ເເລ້ວ {testimonial.product}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-premium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary-foreground">
              ເຈົ້າພ້ອມແລ້ວບໍ?ທີ່ຈະມາສັນຜັກປະສົບການລະດັບດີເເລະມີຄຸນນະພາບ?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              ມາເຂົ້າຮ່ວມຊື້ສີນຄ້າຂອງເຮົາ ແລະ ສັນຜັກປະສົບການເເລະຄວາມເເຕກຕ່າງຂອງເຮົາ ໃນຮ້ານຂອງພວກເຮົາເລີຍ!
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:bg-gold text-primary font-semibold">
              <Link to="/shop">
                ກົົດໄປຊື້ສິນຄ້າເລີຍ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;