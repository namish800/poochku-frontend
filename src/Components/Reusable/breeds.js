const dogDB = [
    {
        "id": 1,
        "breed": "SIBERIAN HUSKY",
        "generalDescription": "The Siberian Husky is a medium-sized, well-muscled breed originating from Siberia. Renowned for its stunning appearance, the Husky boasts a thick double coat, erect triangular ears, and distinctive markings. These dogs were bred for sled pulling and thrive in colder climates. They are known for their friendly and outgoing nature, making them good family dogs. Due to their history as working dogs, Huskies have high energy levels and require regular exercise and mental stimulation. Their independent streak may require patient training.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 4,
        "easyToTrain": 3
    },
    {
        "id": 2,
        "breed": "GERMAN SHEPHERD",
        "generalDescription": "The German Shepherd is a versatile and highly intelligent breed that has excelled in numerous roles, including police, service, and search and rescue work. This breed is large and well-muscled, characterized by its noble and confident expression. German Shepherds are loyal, courageous, and incredibly trainable, making them popular choices for various tasks. They are protective of their family and have an innate sense of duty. A well-trained German Shepherd can be both a gentle family pet and a steadfast guardian.",
        "kidFriendlyScore": 4,
        "dogFriendly": 3,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 5,
        "easyToTrain": 5
    },
    {
        "id": 3,
        "breed": "AMERICAN/ EUROPEAN DOBERMAN",
        "generalDescription": "The Doberman is a medium to large breed with a sleek and powerful appearance. Developed in Germany, Dobermans are known for their loyalty, intelligence, and protective instincts. They are often used as guard dogs and are quick learners, excelling in obedience and protection training. Proper socialization is crucial for this breed, as they can be reserved with strangers. Their short coat is easy to maintain, and their energy levels require regular exercise.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 4,
        "easyToTrain": 4
    },
    {
        "id": 4,
        "breed": "ROTTWEILER",
        "generalDescription": "The Rottweiler is a strong and confident breed with a history as a herding and working dog. These dogs have a distinct black coat with tan markings and a solid build. Rottweilers are known for their loyalty, protective nature, and intelligence. With proper training and socialization, they can be loving family pets and excellent guardians. However, their strength and size require responsible ownership and training.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Medium",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 4,
        "easyToTrain": 4
    },
    {
        "id": 5,
        "breed": "SAINT BERNARD",
        "generalDescription": "The Saint Bernard is a giant breed with a gentle and patient temperament. Originating in the Swiss Alps, these dogs were historically used for mountain rescue work. They have a thick coat, often with white and red or mahogany markings. Saint Bernards are known for their affinity toward children and their calm demeanor. Despite their large size, they are known for being friendly and good-natured.",
        "kidFriendlyScore": 5,
        "dogFriendly": 5,
        "shedding": "High",
        "easyToGroom": 2,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 6,
        "breed": "GREAT DANE",
        "generalDescription": "The Great Dane is a massive and regal breed with a friendly and affectionate nature. Despite their imposing size, they are often referred to as \"gentle giants.\" Great Danes have a short coat that comes in various colors, and they make excellent companions due to their gentle and loving demeanor. They require regular exercise to stay healthy and should be properly socialized from a young age.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 7,
        "breed": "FRENCH MASTIFF",
        "generalDescription": "The French Mastiff, also known as Dogue de Bordeaux, is a powerful and imposing breed with a wrinkled face and a loyal disposition. Originating in France, they were originally used for guarding and protecting. French Mastiffs are known for their strong bonds with their families and their protective nature. They require consistent training and socialization to become well-rounded companions.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 8,
        "breed": "ENGLISH MASTIFF",
        "generalDescription": "The English Mastiff is a massive and gentle breed known for its calm and dignified personality. Despite their imposing size, they are affectionate and devoted to their families. English Mastiffs are characterized by their loose, wrinkled skin and short coat. They make excellent family pets but may require early training to manage their size and strength.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 2,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 9,
        "breed": "DOGO ARGENTINO",
        "generalDescription": "The Dogo Argentino is a large, muscular breed originally bred for big game hunting. They have a distinctive white coat and a strong and protective nature. Dogo Argentinos are loyal and affectionate with their families but can be wary of strangers. Proper socialization is essential to ensure their well-rounded behavior. They have high energy levels and need regular exercise to stay content.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 4,
        "easyToTrain": 3
    },
    {
        "id": 10,
        "breed": "CANE CORSO",
        "generalDescription": "The Cane Corso is a robust and imposing breed with a strong protective instinct. Originating in Italy, they were bred for guarding and hunting. Cane Corsos are loyal and devoted to their families, making them excellent protectors. Early socialization and training are crucial for these dogs, as their size and strength require proper management.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 4,
        "easyToTrain": 3
    },
    {
        "id": 11,
        "breed": "BEAGLE",
        "generalDescription": "The Beagle is a small and friendly breed with a keen sense of smell. They have a short coat and come in a variety of colors. Beagles are known for their friendly disposition and make great companions for families and individuals alike. They have a curious nature and may follow their nose, so proper training and a secure environment are important.",
        "kidFriendlyScore": 5,
        "dogFriendly": 5,
        "shedding": "Low",
        "easyToGroom": 2,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 12,
        "breed": "CHOW CHOW",
        "generalDescription": "The Chow Chow is a distinctive breed known for its lion-like mane and unique blue-black tongue. Originating in China, they have a dignified and independent nature. Chow Chows are loyal to their families but may be reserved with strangers. Their dense double coat requires regular grooming, and early socialization and training are essential to manage their sometimes aloof demeanor.",
        "kidFriendlyScore": 2,
        "dogFriendly": 2,
        "shedding": "High",
        "easyToGroom": 2,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 13,
        "breed": "FRENCH BULLDOG",
        "generalDescription": "The French Bulldog is a small and charming breed with a playful and affectionate personality. They have a compact build, distinctive \"bat ear\" appearance, and a short coat. French Bulldogs are known for being adaptable and friendly, making them suitable companions for various living situations. They have moderate energy levels and enjoy being around people.",
        "kidFriendlyScore": 4,
        "dogFriendly": 5,
        "shedding": "Low",
        "easyToGroom": 2,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 14,
        "breed": "ENGLISH COCKER SPANIEL",
        "generalDescription": "The English Cocker Spaniel is a medium-sized breed known for its cheerful and energetic nature. They have a silky coat that comes in various colors and patterns. English Cocker Spaniels are friendly, affectionate, and enjoy spending time with their families. They have a playful disposition and excel in various canine sports and activities.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Moderate",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 4,
        "easyToTrain": 4
    },
    {
        "id": 15,
        "breed": "GOLDEN RETRIEVER",
        "generalDescription": "The Golden Retriever is a friendly and intelligent breed with a luxurious golden coat. Originating in Scotland, they were bred for retrieving game from water. Golden Retrievers are known for their affectionate and gentle nature, making them wonderful family pets. They are highly trainable and excel in obedience, service, and therapy work.",
        "kidFriendlyScore": 5,
        "dogFriendly": 5,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 5,
        "easyToTrain": 5
    },
    {
        "id": 16,
        "breed": "LABRADOR RETRIEVER",
        "generalDescription": "The Labrador Retriever is a versatile and popular breed known for its intelligence and friendly demeanor. They have a short, water-resistant coat that comes in three standard colors: black, yellow, and chocolate. Labrador Retrievers are highly trainable and make excellent family companions, service dogs, and working partners. Their playful and loving nature endears them to people of all ages.",
        "kidFriendlyScore": 5,
        "dogFriendly": 5,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 5,
        "easyToTrain": 5
    },
    {
        "id": 17,
        "breed": "AMERICAN BULLY",
        "generalDescription": "The American Bully is a muscular breed with a confident and outgoing personality. They have a strong and athletic build, often characterized by their wide chest and powerful stance. American Bullies are known for their loyalty and make devoted family pets. Proper training and socialization are important to ensure they develop well-rounded behavior.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 18,
        "breed": "DALMATIAN",
        "generalDescription": "The Dalmatian is a distinctive breed known for its unique black or liver spotted coat. They have a sleek and athletic build and are known for their endurance and energy. Dalmatians are friendly and outgoing but may require early training and socialization to manage their sometimes independent nature. They have a history as carriage dogs and firehouse mascots.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 19,
        "breed": "ENGLISH BULLDOG",
        "generalDescription": "The English Bulldog is a medium-sized breed with a distinctive wrinkled face and loose skin. They have a stocky and muscular build and are known for their gentle and affectionate nature. English Bulldogs make excellent companions and are often good with children. They have a moderate energy level and enjoy lounging and spending time with their families.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 2,
        "energyLevel": "Low",
        "intelligence": 2,
        "easyToTrain": 2
    },
    {
        "id": 20,
        "breed": "POINTER",
        "generalDescription": "The Pointer is a versatile and athletic breed known for its keen hunting skills and energetic nature. They have a sleek and muscular build, often characterized by their distinctive stance while pointing at game birds. Pointers are friendly, intelligent, and make excellent companions for active individuals or families. They require regular exercise to maintain their physical and mental well-being.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 4,
        "easyToTrain": 4
    },
    {
        "id": 21,
        "breed": "AMERICAN AKITA",
        "generalDescription": "The American Akita is a powerful and dignified breed with a strong protective nature. They have a dense double coat, erect ears, and a curled tail. American Akitas are loyal to their families and can be reserved with strangers. Proper training and socialization are essential to ensure they develop appropriate behavior. They have moderate energy levels and enjoy spending time with their loved ones.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 4,
        "easyToTrain": 3
    },
    {
        "id": 22,
        "breed": "BOXER",
        "generalDescription": "The Boxer is a medium to large breed known for its playful and energetic personality. They have a strong and muscular build, often characterized by their square muzzle and expressive face. Boxers are intelligent, loyal, and have a natural protective instinct. They make excellent family dogs and are good with children. Regular exercise and mental stimulation are important to keep them happy and healthy.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Moderate",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 23,
        "breed": "INDIAN SPITZ",
        "generalDescription": "The Indian Spitz is a small to medium-sized breed known for its fox-like appearance and lively personality. They have a thick double coat, pointed ears, and a plumed tail that curls over their back. Indian Spitz dogs are friendly, affectionate, and make good companions for families or individuals. They enjoy playing and spending time with their owners.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Moderate",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 24,
        "breed": "CULTURE POMERANIAN",
        "generalDescription": "The Pomeranian, often affectionately referred to as the \"Pom,\" is a small and spirited breed known for its lively personality and luxurious double coat. Despite its diminutive size, the Pomeranian possesses a vibrant and confident demeanor that often belies its small stature. Originally bred as larger sled dogs in the Arctic regions, Pomeranians have evolved into charming and engaging companions, cherished for their lively antics and devotion to their families.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 25,
        "breed": "SHIH TZU",
        "generalDescription": "The Shih Tzu is a small breed known for its long, flowing coat and charming personality. Originating in China, they were bred to be companions and have a regal demeanor. Shih Tzus are affectionate and enjoy being around people, making them great lap dogs. Their luxurious coat requires regular grooming, and they thrive on attention and affection.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 4,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 26,
        "breed": "MALTESE",
        "generalDescription": "The Maltese is a small breed known for its silky white coat and lively personality. Originating in the Mediterranean, they were favored by royalty and aristocracy. Maltese dogs are affectionate and devoted to their families, making them excellent companions. They have a playful nature and enjoy being the center of attention.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Low",
        "easyToGroom": 4,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 27,
        "breed": "HAVANESE",
        "generalDescription": "The Havanese is a small breed known for its lively and affectionate nature. They have a long, silky coat that comes in various colors and patterns. Havanese dogs are friendly, adaptable, and enjoy being part of the family. They are social and get along well with other pets and people, making them great companions for various households.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 3,
        "energyLevel": "Medium",
        "intelligence": 4,
        "easyToTrain": 4
    },
    {
        "id": 28,
        "breed": "LHASA APSO",
        "generalDescription": "The Lhasa Apso is a small breed known for its long, flowing coat and spirited personality. Originating in Tibet, they were bred to be watchful and alert. Lhasa Apsos are loyal to their families and can be wary of strangers, making them good watchdogs. They have a confident nature and require regular grooming to maintain their coat.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Low",
        "easyToGroom": 4,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 29,
        "breed": "PUG",
        "generalDescription": "The Pug is a small breed known for its wrinkled face and charming personality. Originating in China, they were bred to be companions to royalty. Pugs are affectionate and enjoy being around people, making them excellent family pets. They have a distinctive appearance, with a short muzzle and curled tail.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Moderate",
        "easyToGroom": 3,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 30,
        "breed": "POODLE",
        "generalDescription": "The Poodle comes in three sizes—Standard, Miniature, and Toy—and is known for its intelligence, elegance, and hypoallergenic coat. Originating in Germany, Poodles were bred for various tasks, including retrieving in water. Poodles are highly trainable and excel in various dog sports and activities. They have a proud and alert demeanor, and their coat requires regular grooming.",
        "kidFriendlyScore": 4,
        "dogFriendly": 4,
        "shedding": "Low",
        "easyToGroom": 1,
        "energyLevel": "High",
        "intelligence": 5,
        "easyToTrain": 5
    },
    {
        "id": 31,
        "breed": "DACHSHUND",
        "generalDescription": "The Dachshund, often referred to as the \"wiener dog,\" is a distinctive breed with a long body and short legs. Originating in Germany, they were bred for hunting small game. Dachshunds are playful, curious, and have a courageous nature. They make entertaining companions and enjoy spending time with their families.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Moderate",
        "easyToGroom": 2,
        "energyLevel": "Medium",
        "intelligence": 3,
        "easyToTrain": 3
    },
    {
        "id": 32,
        "breed": "CHIHUAHUA",
        "generalDescription": "The Chihuahua is a tiny breed with a big personality. Originating in Mexico, they were revered by ancient civilizations. Chihuahuas are loyal to their owners and can be bold and confident. They have a delicate build, a distinctive apple-shaped head, and a short or long coat. Chihuahuas are well-suited for apartment living and are often devoted companions.",
        "kidFriendlyScore": 2,
        "dogFriendly": 2,
        "shedding": "Low",
        "easyToGroom": 1,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 33,
        "breed": "INDIE",
        "generalDescription": "The Chihuahua is a tiny breed with a big personality. Originating in Mexico, they were revered by ancient civilizations. Chihuahuas are loyal to their owners and can be bold and confident. They have a delicate build, a distinctive apple-shaped head, and a short or long coat. Chihuahuas are well-suited for apartment living and are often devoted companions.",
        "kidFriendlyScore": 2,
        "dogFriendly": 2,
        "shedding": "Low",
        "easyToGroom": 1,
        "energyLevel": "Low",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 34,
        "breed": "PITBULL",
        "generalDescription": "The Labrador Retriever is a versatile and popular breed known for its intelligence and friendly demeanor. They have a short, water-resistant coat that comes in three standard colors: black, yellow, and chocolate. Labrador Retrievers are highly trainable and make excellent family companions, service dogs, and working partners. Their playful and loving nature endears them to people of all ages.",
        "kidFriendlyScore": 5,
        "dogFriendly": 5,
        "shedding": "High",
        "easyToGroom": 3,
        "energyLevel": "High",
        "intelligence": 5,
        "easyToTrain": 5
    },
    {
        "id": 35,
        "breed": "TOY POMERANIAN",
        "generalDescription": "The Toy Pomeranian, often simply called the Pomeranian, is a small breed known for its fluffy coat, fox-like face, and bright personality. Originating from the Pomerania region in Central Europe, these dogs have become popular companions due to their compact size and charming demeanor. Despite their diminutive stature, Pomeranians possess a confident and lively disposition, often displaying a fearless attitude. They are highly affectionate towards their owners and tend to form strong bonds with them. Pomeranians are adaptable to various living environments, making them suitable for both apartment living and larger homes. However, their high energy levels require regular exercise and mental stimulation to prevent boredom and destructive behavior. While Pomeranians are generally friendly, they can be wary of strangers and may exhibit territorial behavior if not properly socialized. Due to their thick double coat, Pomeranians require regular grooming to maintain their fluffy appearance and prevent matting.",
        "kidFriendlyScore": 3,
        "dogFriendly": 3,
        "shedding": "Moderate",
        "easyToGroom": 2,
        "energyLevel": "High",
        "intelligence": 3,
        "easyToTrain": 2
    },
    {
        "id": 36,
        "breed": "YORKSHIRE TERRIER",
        "generalDescription": "The Yorkshire Terrier, often affectionately called the Yorkie, is a small breed with a big personality. Originating from Yorkshire, England, these dogs were initially bred for catching rats in clothing mills but have since become beloved companions and show dogs. Yorkies are known for their long, silky coats that come in a variety of colors, including blue and tan. Despite their small size, Yorkies are spirited and confident, often exhibiting a bold and feisty demeanor. They are fiercely loyal to their families and can form strong bonds with their owners. Due to their compact size, Yorkies are well-suited for apartment living, although they still require regular exercise and mental stimulation to stay healthy and happy. Yorkies are intelligent dogs, but their independent nature can make them stubborn at times, requiring patient and consistent training. They can be wary of strangers and may exhibit protective behaviors, making early socialization crucial. While their coat is beautiful, it requires frequent grooming to prevent matting and maintain its luxurious appearance.",
        "kidFriendlyScore": 3,
        "dogFriendly": 2,
        "shedding": "Low",
        "easyToGroom": 1,
        "energyLevel": "Moderate",
        "intelligence": 4,
        "easyToTrain": 2
    }
]

export default dogDB;