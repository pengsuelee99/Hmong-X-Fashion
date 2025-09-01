import { useState, useMemo } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ui/product-card';
import { products, categories, priceRanges } from '@/data/products';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(product => 
          product.price >= range.min && product.price <= range.max
        );
      }
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-premium-light border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              ສີນຄ້າຂອງພວກເຮົາ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ມາພົບກັບສີນຄ້າຂອງພວກເຮົາທີ່ພວກເຮົາຄັບມາຢ່າງດີເເລະພີຖີພີຖັນເເຕ່ລະຢ່າງລ້ວນເເລ້ວເເຕ່ສະເເດງເຖິ່ງຄວາມເອົາໃຈໃສ່ທຸກລາຍລະອຽດ.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-gold" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">ຄົ້ນຫາ</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="ຄົ້ນຫາ ສີນຄ້າ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">ໝວດໝູ່</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="ໝວດໝູ່ທັງໝົດ" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'ໝວດໝູ່ທັງໝົດ' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">ລາຄາສີນຄ້າ</label>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="ລາຄາທັງຫມົດ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ລາຄາທັງຫມົດ</SelectItem>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.label} value={range.label}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <p className="text-muted-foreground">
                ສະເເດງ {filteredProducts.length} ຈາກ {products.length} ສີນຄ້າ
              </p>
              
              <div className="flex items-center space-x-4">
                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">ຊື່ A-Z</SelectItem>
                    <SelectItem value="price-low">ລາຄາ: ຕໍ່າເຖິງສູງ</SelectItem>
                    <SelectItem value="price-high">ລາຄາ: ສູງເຖິງຕໍ່າ</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex bg-muted rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-background shadow-sm' : ''}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-background shadow-sm' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <CardContent>
                  <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="mt-4"
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className={viewMode === 'list' ? 'lg:flex lg:flex-row lg:max-w-none' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;