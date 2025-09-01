import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground">
              ຕິດຕໍ່ <span className="bg-gradient-gold bg-clip-text text-transparent">ພວກເຮົາ</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ພວກເຮົາພ້ອມທີ່ຈະຊ່ວຍເຫຼືອແລະຕອບຄໍາຖາມຂອງທ່ານ. ຢ່າລັງເລນໃນການຕິດຕໍ່ພວກເຮົາ ແລະ ພ້ອມຕໍ່ພາຍໃນ 24 ຊົ່ວໂມງ, ພວກເຮົາຈະເຕັມໃຈ.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">ຂໍ້ມູນການຕິດຕໍ່</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: ' ສະຖານທີ່ຮ້ານ',
                    info: 'ບ້ານໂພນງາມໃຕ້\ ເມືອງເເປກ\ ເເຂວງຊຽງຂວາງ\ ປະເທດລາວ'
                  },
                  {
                    icon: Phone,
                    title: 'ໂທຫາພວກເຮົາ',
                    info: '+856 (20) 91859172\nວັນຈັນ-ວັນເສົາ: 9ໂມງເຊົ້າ-6ໂມງເຍັນ'
                  },
                  {
                    icon: Mail,
                    title: 'Email ພວກເຮົາ',
                    info: 'pengsuelee99@gmail.com\npengsuelee55@gmail.com'
                  },
                  {
                    icon: Clock,
                    title: 'ໂມງເຮັດວຽກ',
                    info: 'ວັນຈັນ - ວັນສຸກ: 9ໂມງເຊົ້າ - 6ເຢັນ\nວັນເສົາ: 10ໂມງເຊົ້າ - 4ເຢັນ\nວັນອາທິດ: ປິດຮ້ານ'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">ຕິດຕາມພວກເຮົາ</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', url: 'https://facebook.com/pengsue.lee.75' },
                  { name: 'Instagram', url: 'https://instagram.com/pengsuelee/' },
                  { name: 'Tiktok', url: 'https://tiktok.com/@suelee99?_t=ZS-8zMJdA5eON6&_r=1' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-gold transition-colors flex items-center justify-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-muted-foreground group-hover:text-primary font-medium text-sm">
                      {social.name[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-card-premium">
              <CardHeader>
                <CardTitle className="text-2xl">ສົ່ງຂໍ້ຄວາມເຖິ່ງເຮົາ</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name (ຊື່ເຕັມ)</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sue Lee"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address (ອິເມວຊອງທ່ານ)</Label>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number (ເບີໂທ)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+856 (20) 91859172"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="ພວກເຮົາຈະຊ່ວຍເຈົ້າເເນວໃດ?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="ບວກລາຍລະອຽດຂອງທ່ານທີ່ນີ້..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-gold hover:bg-gradient-premium" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        ກົດສົ່ງຂໍ້ຄວາມ
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-gold mx-auto" />
                  <p className="text-muted-foreground">ເບິ່ງເເຜນທີ່ໄດ້ທີ່ນີ້</p>
                  <p className="text-sm text-muted-foreground">
                    (Map placeholder - ກະລຸນາເພີ່ມແຜນທີ່ Google Maps ຫຼື ແຜນທີ່ OpenStreetMap ໃນນີ້) <br />
                    https://maps.app.goo.gl/xphoJJYMtvHBVXpg9
                    
                     </p>
                     
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">ຄໍາຖາມທີ່ພົບບ່ອນເປັນປະຈຳ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ຄຳຕອບດ່ວນສຳລັບຄຳຖາມທົ່ວໄປທີ່ກ່ຽວຂ້ອງກັບສີນຄ້າເເລະການບໍລິການຂອງພວກເຮົາ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'ເຮົາມີນະໂຍບາຍການສົ່ງຄືນສີນຄ້າ?',
                answer: 'ເຮົາມີນະໂຍບາຍການສົ່ງຄືນສີນຄ້າໃນຫຼັງຈາກທີ່ທ່ານໄດ້ຮັບສີນຄ້າ. ຖ້າຫາກສີນຄ້າມີບັນຫາທາງເຮົາຈະຮັບສີນຄ້າຄືນແລະໃຫ້ເງິນຄືນຫາທ່ານ.'
              },
              {
                question: 'ພວກເຮົາສາມາດສົ່ງສີນຄ້າໄປທົ່ວໂລກບໍ?',
                answer: 'ໄດ້ທີ່ພວກເຮົາສາມາດສົ່ງສີນຄ້າໄປທົ່ວໂລກໄດ້.ເເຕ່ຄ່າສົ່ງຕ້ອງເປັນທ່ານເອງທີ່ຈ່າຍ.'
              },
              {
                question: 'ຂ້ອຍສາມາດຕິດຕາມສະຖານະຂອງການສັ່ງຊື້ໄດ້ແນ່ນອນແນວໃດ?',
                answer: 'ເມື່ອທ່ານສັ່ງຊື້ສີນຄ້າ, ທ່ານຈະໄດ້ຮັບອີເມວຢືນຢັນການສັ່ງຊື້ ແລະ ລາຍລະອຽດ. ທ່ານສາມາດໃຊ້ເບີຕິດຕໍ່ທີ່ສະແດງໃນອີເມວນັ້ນເພື່ອຕິດຕາມສະຖານະ.'
              },
              {
                question: 'ສີນຄ້າຂອງພວກເຮົາມີຮັບປະກັນບໍ?',
                answer: 'ໄດ້, ສີນຄ້າທັງຫມົດຂອງພວກເຮົາມີຮັບປະກັນ 7ວັນ ໃນເວລານັ້ນ ຖ້າສີນຄ້າມີບັນຫາ ທ່ານສາມາດເຂົ້າໄປໃນນະໂຍບາຍການຮັບປະກັນເເລະ ຕາມນະໂຍບາຍ.'
              },
              {
                question: 'ສາມາດແກ້ໄຂການສັ່ງຊື້ຂອງຂ້ອຍໄດ້ບໍ?',
                answer: 'ໄດ້, ທ່ານສາມາດແກ້ໄຂການສັ່ງຊື້ໄດ້ ໃນເວລາ 1 ຊົ່ວໂມງ ຫຼັງຈາກທີ່ທ່ານໄດ້ສັ່ງ. ການແກ້ໄຂນີ້ ອາດຈະເເຕ່ ປຽນແປງ ຫາ ຍົກເລີກ.'
              },
              {
                question: 'ຂ້ອຍສາມາດຈ່າຍເງິນໄດ້ແນວໃດ?',
                answer: 'ພວກເຮົາຮັບການຈ່າຍເງີນຜ່ານທະນາຄານຕ່າງໆເຈົ້າ.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;