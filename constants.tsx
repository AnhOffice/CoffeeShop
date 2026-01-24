import React from 'react';
import { Leaf, Recycle, Heart, Droplet } from 'lucide-react';
import { Product, TeamMember } from './types.ts';

export const COLORS = {
  COFFEE_BROWN: '#3E2723',
  SAND_BEIGE: '#F5F5DC',
  EARTHY_GREEN: '#81C784',
};

// Icons remain static
export const ICONS = {
  Handmade: <Recycle className="w-4 h-4" />,
  Sustainability: <Leaf className="w-4 h-4" />,
  Craft: <Droplet className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />
};

export const DATA = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      team: 'Team',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact'
    },
    products: [
      {
        id: '1',
        name: 'The Last Drop Tray',
        description: 'A sculptural serving piece crafted from compressed espresso grounds.',
        price: '1.600.000₫',
        image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
        tag: 'Best Seller'
      },
      {
        id: '2',
        name: 'Mini Eco Planter',
        description: 'Organic textures for your favorite succulents, moisture-wicking by nature.',
        price: '800.000₫',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800',
        tag: '100% Recycled'
      },
      {
        id: '3',
        name: 'First Sip Pen Holder',
        description: 'Minimalist desk organization with a subtle aroma of roasted beans.',
        price: '700.000₫',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        tag: 'Sustainable'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Elias Thorne',
        role: 'Master Artisan',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        bio: 'Dedicated to the alchemy of transforming organic waste into structural art.'
      },
      {
        id: '2',
        name: 'Sarah Chen',
        role: 'Eco Designer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        bio: 'Finding the intersection between modern minimalism and natural textures.'
      },
      {
        id: '3',
        name: 'Marcus Bell',
        role: 'Lead Alchemist',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        bio: 'Perfecting the proprietary resin-free binding process for coffee grounds.'
      },
      {
        id: '4',
        name: 'Luna Martinez',
        role: 'Sustainability Director',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
        bio: 'Leading our zero-waste mission and partnerships with local coffee shops.'
      },
      {
        id: '5',
        name: 'James Kim',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
        bio: 'Crafting the visual story behind every recycled piece and our brand identity.'
      }
    ],
    blog: [
      {
        id: '1',
        title: '5 Ways to Recycle Coffee Grounds at Home',
        excerpt: 'Don\'t throw away your coffee grounds! Discover simple ways to turn them into fertilizer, body scrubs, and more.',
        date: 'Jan 24, 2024',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        content: `Coffee grounds are a versatile resource that often goes to waste. The average coffee drinker produces tons of waste annually, but this "waste" is actually a goldmine for your home and garden. Here are 5 detailed ways to reuse them:

        1. **Nutrient-Rich Fertilizer**:
        Coffee grounds are rich in nitrogen, which is a key nutrient for green growth. They also contain potassium and phosphorus. They are particularly great for acid-loving plants like blueberries, azaleas, hydrangeas, and roses. Simply sprinkle a thin layer around the base of your plants or mix them into your compost pile to give it a nitrogen boost.

        2. **Natural Body Scrub**:
        Why buy expensive scrubs when you can make a better one at home? The texture of coffee grounds is perfect for mechanical exfoliation. 
        *Recipe*: Mix 1/2 cup of used grounds with 1/4 cup of coconut oil and a tablespoon of brown sugar. Gently massage onto wet skin in circular motions to remove dead skin cells and improve circulation. The caffeine can also help tighten skin appearance!

        3. **Powerful Odor Absorber**:
        Nitrogen helps neutralize odors rather than just masking them. Dry out your used grounds completely (this is important to prevent mold) and place them in a small bowl or an old stocking. Keep it in your fridge, gym bag, or near the litter box to absorb unpleasant smells effectively.

        4. **Eco-Friendly Cleaning Scrub**:
        The coarse texture makes coffee grounds an excellent, non-toxic abrasive for cleaning tough grime off pots and pans. Sprinkle some grounds onto a scouring pad and scrub away burnt-on food. (Note: Rinse well and avoid using on porous materials that might stain).

        5. **Garden Pest Repellent**:
        Create a barrier against slugs and snails. These soft-bodied pests dislike the abrasive texture of the grounds and will often avoid crossing them to get to your precious plants. Some studies also suggest the heavy caffeine content can be a deterrent to ants.`
      },
      {
        id: '2',
        title: 'Beauty from Coffee Grounds: The Ultimate Guide',
        excerpt: 'Natural skincare secrets from coffee grounds for exfoliating, brightening, and reducing puffiness.',
        date: 'Jan 20, 2024',
        image: 'https://images.unsplash.com/photo-1515516947640-8cde5397ba0c?auto=format&fit=crop&q=80&w=800',
        content: `Your morning brew can double as your evening beauty routine. Caffeine is a superstar ingredient in many high-end skincare products because it acts as a vasoconstrictor and an antioxidant.

        **The Benefits:**
        *   **Exfoliation**: Removes dead skin cells, leaving skin smoother and brighter.
        *   **De-puffing**: Caffeine restricts blood vessels, quickly reducing inflammation and dark circles under the eyes.
        *   **Antioxidant Boost**: Fights premature aging caused by free radicals.

        **DIY Recipes to Try:**

        **1. The "Wake Up" Face Mask**
        Mix equal parts fine coffee grounds and yogurt (dairy or non-dairy). The lactic acid in yogurt gently peels while coffee stimulates blood flow. Apply to face, let sit for 10 minutes, and rinse with warm water.

        **2. Scalp Detox Scrub**
        Product buildup can weigh down hair. Before shampooing, massage a handful of wet grounds into your scalp. It lifts away residue and stimulates hair follicles effectively.

        **3. Cellulite Stimulator**
        While no cure for cellulite exists, caffeine can temporarily tighten skin. Mix grounds with warm olive oil and massage vigorously into target areas for 5 minutes before showering.

        *Precaution*: Always do a patch test first, especially if you have sensitive skin.`
      },
      {
        id: '3',
        title: 'Our Recycling Journey: From Waste to Art',
        excerpt: 'Why we chose coffee grounds as our main material? The story of our mission to reduce landfill waste.',
        date: 'Jan 15, 2024',
        image: 'https://images.unsplash.com/photo-1525648199074-ce30b561a115?auto=format&fit=crop&q=80&w=800',
        content: `It all started with a simple observation at a local corner cafe. We watched as the barista knocked the portafilter against the bin, discarding a puck of espresso grounds. Again. And again. By the end of the hour, the bin was full.

        **The Problem**
        Coffee grounds are organic, but when buried in anaerobic landfill conditions, they decompose to produce methane—a greenhouse gas roughly 80 times more potent than carbon dioxide in the short term.

        **The Eureka Moment**
        We realized that this "waste" was actually a material with incredible properties. It has a beautiful, earthy color, a granular texture perfect for binding, and a subtle, comforting aroma. But how could we stabilize it?

        **The Process**
        Our team spent six months experimenting. We tried resins (too toxic), glues (too weak), and cement (too heavy). Finally, we developed a proprietary blend of natural plant starches and bio-polymers that bind the grounds into a durable, stone-like material that is 100% biodegradable.

        **The Impact**
        Today, Coffee Cycle Studio has diverted over 5 tons of coffee waste from landfills. Each product you buy prevents hundreds of grams of potential methane emissions. We are not just making decor; we are reimagining the lifecycle of our daily habits.`
      }
    ],
    ui: {
      hero: {
        subtitle: 'From Grounds to Art',
        title: 'Relive \n A New Life',
        description: 'We transform discarded coffee grounds into sustainable design pieces, cherishing their imperfections and life cycle stories.',
        cta_collection: 'View Collection',
        cta_story: 'Our Story'
      },
      about: {
        quote: '"Every end is a new beginning."',
        philosophy: 'Our Philosophy',
        title: 'Coffee is More Than a Drink',
        p1: 'Every day, tons of coffee grounds are sent to landfills. We see potential: a raw material with rich textures, natural colors, and nostalgic aroma.',
        p2: 'At Coffee Cycle Studio, we collect grounds from local cafes and turn them into durable, aesthetic home goods.',
        feature1_title: '100% Natural',
        feature1_desc: 'Fully biodegradable, plastic-free.',
        feature2_title: 'Handcrafted',
        feature2_desc: 'Crafted one by one by artisans.'
      },
      team: {
        subtitle: 'The Creators',
        title: 'Meet the Team',
        desc: 'The passionate individuals behind every handcrafted recycled product.'
      },
      products: {
        title: 'Curated Collection',
        desc: 'Each piece is unique, showcasing the organic variation of coffee grounds.',
        view_all: 'View All Products',
        buy_now: 'Buy Now'
      },
      blog: {
        title: 'Coffee & Recycling Corner',
        desc: 'Discover stories, tips, and green living inspiration from used coffee grounds.',
        read_more: 'Read More'
      },
      contact: {
        subtitle: 'Contact',
        title: 'Join Us',
        desc: 'Have questions, partnership ideas, or want to join our grounds collection program? Contact us today.',
        visit: 'Visit Studio',
        phone: 'Phone',
        form_title: 'Send Message',
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      },
      footer: {
        rights: '© 2024 Coffee Cycle Studio. All rights reserved.'
      },
      product_detail: {
        not_found: 'Product Not Found',
        back_home: 'Return Home',
        back_collection: 'Back to Collection',
        reviews: 'reviews',
        warranty: '2 Year Warranty',
        shipping: 'Free Shipping',
        order_now: 'Order Now'
      },
      order_page: {
        back_product: 'Back to Product',
        form_title: 'Order Details',
        success_title: 'Thank you for your order!',
        success_desc: 'We will contact you shortly to confirm details.',
        place_another: 'Place another order',
        confirm_order: 'Confirm Order',
        fields: {
          name: 'Full Name',
          name_placeholder: 'John Doe',
          email: 'Email',
          phone: 'Phone Number',
          address: 'Shipping Address',
          address_placeholder: '123 Coffee Street...'
        }
      }
    }
  },
  vn: {
    nav: {
      home: 'Trang Chủ',
      about: 'Về Chúng Tôi',
      team: 'Đội Ngũ',
      products: 'Sản Phẩm',
      blog: 'Blog',
      contact: 'Liên Hệ'
    },
    products: [
      {
        id: '1',
        name: 'Khay The Last Drop',
        description: 'Một tác phẩm điêu khắc phục vụ được chế tác từ bã cà phê nén.',
        price: '1.600.000₫',
        image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
        tag: 'Bán chạy nhất'
      },
      {
        id: '2',
        name: 'Chậu Cây Mini Eco',
        description: 'Kết cấu hữu cơ cho các loại cây mọng nước yêu thích của bạn, có khả năng hút ẩm tự nhiên.',
        price: '800.000₫',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800',
        tag: '100% Tái chế'
      },
      {
        id: '3',
        name: 'Hộp Đựng Bút First Sip',
        description: 'Tổ chức bàn làm việc tối giản với hương thơm thoang thoảng của hạt cà phê rang.',
        price: '700.000₫',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        tag: 'Bền vững'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Elias Thorne',
        role: 'Nghệ Nhân Chính',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        bio: 'Tận tâm với nghệ thuật biến chất thải hữu cơ thành các tác phẩm nghệ thuật có cấu trúc.'
      },
      {
        id: '2',
        name: 'Sarah Chen',
        role: 'Nhà Thiết Kế Eco',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        bio: 'Tìm kiếm sự giao thoa giữa chủ nghĩa tối giản hiện đại và kết cấu tự nhiên.'
      },
      {
        id: '3',
        name: 'Marcus Bell',
        role: 'Nhà Giả Kim',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        bio: 'Hoàn thiện quy trình kết dính không nhựa độc quyền cho bã cà phê.'
      },
      {
        id: '4',
        name: 'Luna Martinez',
        role: 'Giám Đốc Bền Vững',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
        bio: 'Dẫn dắt sứ mệnh không rác thải và xây dựng quan hệ đối tác với các quán cà phê địa phương.'
      },
      {
        id: '5',
        name: 'James Kim',
        role: 'Giám Đốc Sáng Tạo',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
        bio: 'Kiến tạo câu chuyện hình ảnh đằng sau mỗi sản phẩm tái chế và bản sắc thương hiệu.'
      }
    ],
    blog: [
      {
        id: '1',
        title: '5 Cách Tái Chế Bã Cà Phê Hiệu Quả Tại Nhà',
        excerpt: 'Đừng vội vứt bỏ bã cà phê! Khám phá những cách đơn giản nhưng bất ngờ để biến chúng thành phân bón, mỹ phẩm và vật dụng hữu ích.',
        date: '24 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        content: `Bã cà phê là một nguồn tài nguyên quý giá thường bị lãng phí. Trung bình mỗi người uống cà phê thải ra một lượng lớn bã mỗi năm. Thay vì ném vào thùng rác, đây là 5 cách chi tiết để bạn tận dụng chúng:

        1. **Phân Bón Giàu Dinh Dưỡng**:
        Bã cà phê rất giàu nitơ, kali và phốt pho - bộ ba nguyên tố thiết yếu cho cây trồng. Đặc biệt, chúng có tính axit nhẹ, cực kỳ thích hợp cho hoa hồng, đỗ quyên hay cẩm tú cầu. Bạn chỉ cần rắc một lớp mỏng quanh gốc cây hoặc trộn vào đất trước khi trồng.

        2. **Tẩy Tế Bào Chết Tự Nhiên**:
        Kết cấu hạt mịn của bã cà phê là chất tẩy da chết vật lý tuyệt vời. 
        *Công thức*: Trộn 1/2 chén bã cà phê với 1/4 chén dầu dừa và 1 muỗng đường nâu. Massage nhẹ nhàng lên da ẩm để loại bỏ lớp sừng già cỗi, giúp da sáng mịn và kích thích tuần hoàn máu.

        3. **Khử Mùi Tủ Lạnh Hiệu Quả**:
        Nitơ trong cà phê có khả năng hấp thụ và trung hòa mùi hôi cực tốt. Hãy phơi khô bã cà phê hoàn toàn (để tránh nấm mốc), sau đó cho vào một chiếc bát nhỏ hoặc túi vải. Đặt trong tủ lạnh, tủ giày hoặc túi tập gym để đánh bay mùi khó chịu.

        4. **Chất Tẩy Rửa Đa Năng**:
        Nhờ độ nhám tự nhiên, bã cà phê giúp đánh bay các vết bám cứng đầu trên xoong nồi mà không cần hóa chất mạnh. Rắc bã lên miếng cọ rửa và chà sạch vết thức ăn cháy xém. (Lưu ý: Rửa sạch và tránh dùng trên các bề mặt xốp dễ bám màu).

        5. **Đuổi Côn Trùng**:
        Ốc sên và kiến rất ghét kết cấu và mùi của cà phê. Rải một vòng tròn bã cà phê quanh gốc cây non để tạo "hàng rào bảo vệ" tự nhiên. Cách này vừa an toàn cho vật nuôi lại vừa tốt cho đất.`
      },
      {
        id: '2',
        title: 'Làm Đẹp Từ Bã Cà Phê: Hướng Dẫn Chi Tiết',
        excerpt: 'Bí quyết dưỡng da tự nhiên từ bã cà phê giúp tẩy tế bào chết, làm sáng da, giảm bọng mắt và cải thiện làn da của bạn.',
        date: '20 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1515516947640-8cde5397ba0c?auto=format&fit=crop&q=80&w=800',
        content: `Cafe sáng của bạn có thể trở thành liệu trình spa buổi tối. Caffeine là một thành phần "ngôi sao" trong nhiều sản phẩm dưỡng da cao cấp nhờ khả năng chống oxy hóa và làm co mạch máu.

        **Lợi Ích Của Cà Phê Với Da:**
        *   **Tẩy Da Chết**: Giúp da mịn màng, đều màu.
        *   **Giảm Bọng Mắt**: Caffeine làm co các mạch máu dưới da, giúp giảm sưng và quần thâm mắt nhanh chóng.
        *   **Chống Lão Hóa**: Chứa chất chống oxy hóa mạnh, ngăn ngừa tác hại của gốc tự do.

        **Công Thức DIY Nên Thử:**

        **1. Mặt Nạ "Bừng Tỉnh"**
        Trộn bã cà phê nhuyễn với sữa chua (không đường). Axit lactic trong sữa chua giúp làm mềm da trong khi cà phê kích thích da. Đắp 10 phút rồi rửa sạch với nước ấm.

        **2. Tẩy Tế Bào Chết Da Đầu**
        Bã nhờn và sản phẩm tạo kiểu tóc thường tích tụ trên da đầu. Trước khi gội, hãy massage một nắm bã cà phê ướt vào da đầu. Nó giúp làm sạch sâu và kích thích nang tóc phát triển.

        **3. Hỗ Trợ Giảm Mỡ Sần (Cellulite)**
        Mặc dù không thể chữa khỏi hoàn toàn, caffeine giúp làm săn chắc da tạm thời. Trộn bã cà phê với dầu ô liu ấm và massage mạnh vùng da cần cải tạo trong 5 phút trước khi tắm.

        *Lưu ý*: Luôn thử sản phẩm trên một vùng da nhỏ trước khi dùng toàn mặt, đặc biệt nếu bạn có da nhạy cảm.`
      },
      {
        id: '3',
        title: 'Hành Trình Của Chúng Tôi: Từ Rác Thải Đến Nghệ Thuật',
        excerpt: 'Tại sao chúng tôi chọn bã cà phê? Câu chuyện về sứ mệnh giảm thiểu rác thải bãi chôn lấp và tái sinh vật liệu.',
        date: '15 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1525648199074-ce30b561a115?auto=format&fit=crop&q=80&w=800',
        content: `Tất cả bắt đầu từ một quán cà phê góc phố quen thuộc. Chúng tôi quan sát người pha chế gõ tay cầm máy pha, đổ bỏ khối bã cà phê nén vào thùng rác. Lặp đi lặp lại. Đến cuối giờ, thùng rác đã đầy ắp.

        **Vấn Đề**
        Bã cà phê là chất hữu cơ, nhưng khi bị chôn lấp trong môi trường yếm khí tại bãi rác, chúng phân hủy và sinh ra khí methane - một loại khí nhà kính mạnh gấp 80 lần CO2 trong ngắn hạn.

        **Khoảnh Khắc "Eureka"**
        Chúng tôi nhận ra "thứ bỏ đi" này thực chất là một vật liệu tuyệt vời. Màu nâu trầm ấm áp, kết cấu hạt mịn màng và hương thơm dễ chịu. Nhưng làm sao để định hình chúng?

        **Quá Trình Thử Nghiệm**
        Đội ngũ đã dành 6 tháng ròng rã trong xưởng nhỏ. Chúng tôi thử nhựa (quá độc hại), keo hồ (quá yếu) và xi măng (quá nặng). Cuối cùng, chúng tôi tìm ra công thức độc quyền kết hợp tinh bột thực vật tự nhiên, giúp kết dính bã cà phê thành một vật liệu cứng như đá nhưng phân hủy sinh học 100%.

        **Tác Động**
        Đến nay, Coffee Cycle Studio đã vinh dự chuyển hướng hơn 5 tấn bã cà phê khỏi các bãi chôn lấp. Mỗi sản phẩm bạn cầm trên tay không chỉ là một món đồ trang trí, mà là một lời cam kết về tương lai bền vững của chúng ta.`
      }
    ],
    ui: {
      hero: {
        subtitle: 'Từ Bã Cà Phê Đến Nghệ Thuật',
        title: 'Sống Lại \n Cuộc Đời Mới',
        description: 'Chúng tôi biến bã cà phê bỏ đi thành những món đồ thiết kế bền vững, trân trọng sự không hoàn hảo và câu chuyện vòng đời của chúng.',
        cta_collection: 'Xem Bộ Sưu Tập',
        cta_story: 'Câu Chuyện Của Chúng Tôi'
      },
      about: {
        quote: '"Mọi kết thúc đều là một khởi đầu mới."',
        philosophy: 'Triết Lý Của Chúng Tôi',
        title: 'Cà Phê Không Chỉ Là Đồ Uống',
        p1: 'Hàng ngày, tấn bã cà phê được gửi đến các bãi rác, nơi chúng thải ra khí methane gây hại. Chúng tôi nhìn thấy một tiềm năng khác: một vật liệu thô với kết cấu phong phú, màu sắc tự nhiên và hương thơm đầy hoài niệm.',
        p2: 'Tại Coffee Cycle Studio, chúng tôi thu gom bã cà phê từ các quán cà phê địa phương và biến chúng thành những vật dụng gia đình bền bỉ, thẩm mỹ.',
        feature1_title: '100% Tự Nhiên',
        feature1_desc: 'Phân hủy hoàn toàn, không nhựa.',
        feature2_title: 'Thủ Công',
        feature2_desc: 'Chế tác từng cái một bởi nghệ nhân.'
      },
      team: {
        subtitle: 'Những Người Kiến Tạo',
        title: 'Gặp Gỡ Đội Ngũ',
        desc: 'Những con người đam mê đằng sau mỗi sản phẩm tái chế thủ công của chúng tôi.'
      },
      products: {
        title: 'Bộ Sưu Tập Tinh Tế',
        desc: 'Mỗi sản phẩm là độc nhất, mang đậm dấu ấn hữu cơ tự nhiên của bã cà phê.',
        view_all: 'Xem Tất Cả Sản Phẩm',
        buy_now: 'Mua Ngay'
      },
      blog: {
        title: 'Góc Cà Phê & Tái Chế',
        desc: 'Khám phá những câu chuyện, mẹo vặt và cảm hứng sống xanh từ bã cà phê đã qua sử dụng.',
        read_more: 'Đọc Thêm'
      },
      contact: {
        subtitle: 'Liên Hệ',
        title: 'Tham Gia Cùng Chúng Tôi',
        desc: 'Bạn có câu hỏi, ý tưởng hợp tác hay muốn tham gia chương trình thu gom bã cà phê? Hãy liên hệ với chúng tôi ngay hôm nay.',
        visit: 'Ghé Thăm Studio',
        phone: 'Điện Thoại',
        form_title: 'Gửi Tin Nhắn',
        name: 'Họ Tên',
        email: 'Email',
        message: 'Tin Nhắn',
        submit: 'Gửi Tin Nhắn'
      },
      footer: {
        rights: '© 2024 Coffee Cycle Studio. Đã đăng ký bản quyền.'
      },
      product_detail: {
        not_found: 'Không tìm thấy sản phẩm',
        back_home: 'Quay lại Trang Chủ',
        back_collection: 'Quay lại Bộ Sưu Tập',
        reviews: 'đánh giá',
        warranty: 'Bảo Hành 2 Năm',
        shipping: 'Miễn Phí Vận Chuyển',
        order_now: 'Đặt Hàng Ngay'
      },
      order_page: {
        back_product: 'Quay lại Sản Phẩm',
        form_title: 'Thông Tin Đặt Hàng',
        success_title: 'Cảm ơn bạn đã đặt hàng!',
        success_desc: 'Chúng tôi sẽ liên hệ sớm để xác nhận chi tiết.',
        place_another: 'Đặt hàng khác',
        confirm_order: 'Xác Nhận Đặt Hàng',
        fields: {
          name: 'Họ và Tên',
          name_placeholder: 'Nguyễn Văn A',
          email: 'Email',
          phone: 'Số Điện Thoại',
          address: 'Địa Chỉ Nhận Hàng',
          address_placeholder: 'Số nhà, Tên đường...'
        }
      }
    }
  }
};

// Helper for type safety if needed, but for now strict typing isn't strictly required
// as long as we use DATA[language].key convention.
