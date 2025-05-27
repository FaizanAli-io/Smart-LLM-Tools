export const promptTemplates = {
  "daily-business-tools": {
    "Rewrite This": {
      description:
        "Instantly improve your text. Make it clearer, more professional, or better suited to your audience — without changing the meaning.",
      inputs: [
        {
          name: "originalText",
          label: "Text to Rewrite",
          type: "textarea",
          placeholder: "Enter the text you'd like to improve",
        },
      ],
      prompt: ({ originalText }) =>
        `Rewrite the following text to improve its clarity, tone, and effectiveness based on the selected goal. Keep the meaning the same, but enhance the delivery:\n\n"${originalText}"`,
    },

    "Suggest a Response": {
      description:
        "Get the perfect reply — fast. Polished, relevant, and tailored to match the message you received.",
      inputs: [
        {
          name: "incomingMessage",
          label: "Incoming Message",
          type: "textarea",
          placeholder: "Paste the message you received",
        },
        {
          name: "responseGoal",
          label: "Response Goal",
          type: "text",
          placeholder: "e.g., Answer a question, Confirm receipt",
        },
        {
          name: "tone",
          label: "Preferred Tone (optional)",
          type: "text",
          placeholder: "e.g., Friendly, Formal, Casual",
        },
      ],
      prompt: ({ incomingMessage, responseGoal, tone }) =>
        `Based on the message provided, generate a clear, appropriate, and well-written reply. Match or improve the sender’s tone if needed.\n\nIncoming Message: ${incomingMessage}\nGoal: ${responseGoal}${tone ? `\nTone: ${tone}` : ""}`,
    },

    "Clarify This": {
      description:
        "Make confusing text simple. Turn complex or technical wording into clear, easy-to-understand language.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Insert content to clarify or explain",
        },
        {
          name: "audience",
          label: "Target Audience (optional)",
          type: "text",
          placeholder: "e.g., General public, Junior staff",
        },
        {
          name: "length",
          label: "Preferred Length (optional)",
          type: "text",
          placeholder: "e.g., Keep short / Expand with examples",
        },
      ],
      prompt: ({ originalText, audience, length }) =>
        `Rewrite the following text to make it clearer and easier to understand. Break down any jargon or complex language. Keep the original meaning intact.\n\nText: ${originalText}${audience ? `\nAudience: ${audience}` : ""}${length ? `\nLength Preference: ${length}` : ""}`,
    },

    "Rewrite as Bullet Points": {
      description:
        "Turn long text into sharp, scannable bullet points — fast and clear.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Enter full paragraph or content",
        },
        {
          name: "style",
          label: "Preferred Style (optional)",
          type: "text",
          placeholder: "e.g., Professional, Simple summary",
        },
        {
          name: "audience",
          label: "Audience (optional)",
          type: "text",
          placeholder: "e.g., Client, General public",
        },
      ],
      prompt: ({ originalText, style, audience }) =>
        `Convert the following text into a clear, concise bullet-point format. Maintain the original meaning, remove unnecessary filler, and make it easy to scan.\n\nText: ${originalText}${style ? `\nStyle: ${style}` : ""}${audience ? `\nAudience: ${audience}` : ""}`,
    },

    "Summarise This": {
      description:
        "Get the key points — fast. Condense long text into a short, clear summary.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Insert content to summarise",
        },
        {
          name: "summaryStyle",
          label: "Preferred Summary Style (optional)",
          type: "text",
          placeholder: "e.g., One sentence, Executive summary",
        },
        {
          name: "audience",
          label: "Audience (optional)",
          type: "text",
          placeholder: "e.g., Manager, Client",
        },
      ],
      prompt: ({ originalText, summaryStyle, audience }) =>
        `Read the text below and provide a concise summary that captures the key points. Keep the tone neutral and remove unnecessary detail.\n\nText: ${originalText}${summaryStyle ? `\nStyle: ${summaryStyle}` : ""}${audience ? `\nAudience: ${audience}` : ""}`,
    },

    "Complaint Generator": {
      description:
        "Create a clear, polite, and effective complaint that gets results.",
      inputs: [
        {
          name: "issue",
          label: "What is the complaint about?",
          type: "text",
          placeholder: "e.g., Poor service, Faulty product",
        },
        {
          name: "recipient",
          label: "Who is it addressed to?",
          type: "text",
          placeholder: "e.g., Company, Department",
        },
        {
          name: "details",
          label: "What happened?",
          type: "textarea",
          placeholder: "Describe what occurred",
        },
        {
          name: "resolution",
          label: "Expected Resolution",
          type: "text",
          placeholder: "e.g., Refund, Apology",
        },
        {
          name: "tone",
          label: "Preferred Tone (optional)",
          type: "text",
          placeholder: "e.g., Polite, Urgent",
        },
      ],
      prompt: ({ issue, recipient, details, resolution, tone }) =>
        `Write a professional and clear complaint message based on the following:\n\nIssue: ${issue}\nTo: ${recipient}\nDetails: ${details}\nResolution Expected: ${resolution}${tone ? `\nTone: ${tone}` : ""}`,
    },

    "Sales Email": {
      description:
        "Generate a clear, engaging sales email that gets attention and drives action.",
      inputs: [
        { name: "product", label: "Product or Service", type: "text" },
        { name: "audience", label: "Target Audience", type: "text" },
        { name: "benefit1", label: "Key Benefit 1", type: "text" },
        { name: "benefit2", label: "Key Benefit 2", type: "text" },
        { name: "benefit3", label: "Key Benefit 3", type: "text" },
        { name: "goal", label: "Goal of the Email", type: "text" },
        { name: "tone", label: "Tone Preference (optional)", type: "text" },
        {
          name: "offer",
          label: "Special Offer / Deadline (optional)",
          type: "text",
        },
      ],
      prompt: ({
        product,
        audience,
        benefit1,
        benefit2,
        benefit3,
        goal,
        tone,
        offer,
      }) =>
        `Write a persuasive sales email for the following:\nProduct: ${product}\nAudience: ${audience}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}\nGoal: ${goal}${tone ? `\nTone: ${tone}` : ""}${offer ? `\nSpecial Offer: ${offer}` : ""}`,
    },

    "Collaboration Email": {
      description:
        "Reach out with a clear, friendly email that opens the door to new partnerships.",
      inputs: [
        { name: "company", label: "Your Company Name", type: "text" },
        { name: "recipient", label: "Who You're Contacting", type: "text" },
        { name: "purpose", label: "Purpose of Collaboration", type: "text" },
        { name: "proposal", label: "Your Proposal", type: "text" },
        { name: "benefit1", label: "Benefit 1", type: "text" },
        { name: "benefit2", label: "Benefit 2", type: "text" },
        { name: "benefit3", label: "Benefit 3", type: "text" },
        { name: "tone", label: "Preferred Tone (optional)", type: "text" },
        { name: "nextStep", label: "Next Step", type: "text" },
      ],
      prompt: ({
        company,
        recipient,
        purpose,
        proposal,
        benefit1,
        benefit2,
        benefit3,
        tone,
        nextStep,
      }) =>
        `Write a professional collaboration email from ${company} to ${recipient} about ${purpose}.\nProposal: ${proposal}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}${tone ? `\nTone: ${tone}` : ""}\nNext Step: ${nextStep}`,
    },

    "Business Proposal": {
      description:
        "Create a clear, professional proposal to win new clients, deals, or partnerships.",
      inputs: [
        { name: "company", label: "Your Company", type: "text" },
        { name: "recipient", label: "Proposal For", type: "text" },
        { name: "purpose", label: "Purpose of Proposal", type: "text" },
        { name: "offer", label: "Overview of Offer", type: "text" },
        { name: "benefit1", label: "Benefit 1", type: "text" },
        { name: "benefit2", label: "Benefit 2", type: "text" },
        { name: "benefit3", label: "Benefit 3", type: "text" },
        { name: "pricing", label: "Pricing / Terms", type: "text" },
        { name: "tone", label: "Preferred Tone", type: "text" },
        { name: "nextStep", label: "Next Step", type: "text" },
      ],
      prompt: ({
        company,
        recipient,
        purpose,
        offer,
        benefit1,
        benefit2,
        benefit3,
        pricing,
        tone,
        nextStep,
      }) =>
        `Write a business proposal from ${company} to ${recipient}.\nPurpose: ${purpose}\nOffer: ${offer}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}\nPricing: ${pricing}${tone ? `\nTone: ${tone}` : ""}\nNext Step: ${nextStep}`,
    },

    Randomise: {
      description:
        "Get a fresh version of your content with new wording, flow, and style.",
      inputs: [
        { name: "originalText", label: "Original Text", type: "textarea" },
        { name: "tone", label: "Tone Preference (optional)", type: "text" },
        { name: "length", label: "Length Preference (optional)", type: "text" },
      ],
      prompt: ({ originalText, tone, length }) =>
        `Rewrite the following content into a new version with different structure and word choice. Preserve the meaning.\n\nText: ${originalText}${tone ? `\nTone: ${tone}` : ""}${length ? `\nLength: ${length}` : ""}`,
    },

    "Decision Maker": {
      description:
        "Get clear, reasoned advice to help you make the smartest choice.",
      inputs: [
        { name: "decision", label: "What's the decision about?", type: "text" },
        { name: "optionA", label: "Option A", type: "text" },
        { name: "optionB", label: "Option B", type: "text" },
        { name: "optionC", label: "Option C (optional)", type: "text" },
        { name: "goal", label: "Goal or Outcome", type: "text" },
        {
          name: "constraints",
          label: "Key Constraints (optional)",
          type: "text",
        },
        { name: "tone", label: "Tone (optional)", type: "text" },
      ],
      prompt: ({
        decision,
        optionA,
        optionB,
        optionC,
        goal,
        constraints,
        tone,
      }) =>
        `Evaluate the options for: ${decision}.\nOptions: A) ${optionA}, B) ${optionB}${optionC ? `, C) ${optionC}` : ""}\nGoal: ${goal}${constraints ? `\nConstraints: ${constraints}` : ""}${tone ? `\nTone: ${tone}` : ""}`,
    },
  },
  "business-services": {
    "Competitor Financial Analysis": {
      description:
        "Snooping allowed. See how your rivals are really doing — and find out where you're winning (or need to).",
      inputs: [
        {
          name: "companyName",
          label: "Company Name",
          type: "text",
          placeholder: "Enter the company name (UK registered companies only)",
        },
        {
          name: "document",
          label: "Additional Document",
          type: "file",
          placeholder: "Upload PDF if relevant",
          optional: true,
        },
      ],
      prompt: ({ companyName, document }) =>
        `Analyse the financial position of ${companyName} based on its latest available filings on Companies House.\n\nRetrieve the balance sheet, profit and loss trends (if available), and key financial ratios.\nCompare the latest reporting period with the previous period to assess financial health, growth trends, and liquidity.\nProvide estimates for turnover and profitability based on provided data documents, including a high-level summary of the company's performance, solvency, and key business trends.\n\n${document ? "Use the attached document to help with the analysis." : ""}\n\nGive a final summary with colourful green ticks and red crosses if relevant.\n\nMake this report visually appealing with images, charts and graphs using the data in a creative way.\n\nCombine all this information and structure the findings in a detailed and presentable format.`,
    },

    "Business Marketing Plan": {
      description:
        "Strategy, sorted. Get a complete marketing game plan to grow your brand, attract leads, and outshine the rest.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        {
          name: "businessAddress",
          label: "Business Address",
          type: "text",
          placeholder: "Full address including City and Postcode",
        },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "contactInfo",
          label: "Contact Info (Email/Phone)",
          type: "text",
        },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder: "e.g., Florist, Plumber, Solicitor, E-commerce Store",
        },
        {
          name: "targetArea",
          label: "Target Area / Catchment",
          type: "text",
          placeholder: "e.g., City-wide, 20-mile radius, National",
        },
        {
          name: "yearsInBusiness",
          label: "Years in Business",
          type: "text",
          placeholder: "Number of years or 'New Business'",
        },
        { name: "service1", label: "Key Service/Product 1", type: "text" },
        { name: "service2", label: "Key Service/Product 2", type: "text" },
        { name: "service3", label: "Key Service/Product 3", type: "text" },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder:
            "e.g., Homeowners, SMEs, Landlords, Couples Planning Weddings",
        },
        {
          name: "currentMarketing",
          label: "Current Marketing Activity",
          type: "text",
          placeholder: "e.g., Website only, Google Ads, Social Media presence",
        },
        {
          name: "goal1",
          label: "Marketing Goal 1",
          type: "text",
          placeholder: "e.g., Generate leads, Improve SEO",
        },
        {
          name: "goal2",
          label: "Marketing Goal 2",
          type: "text",
          placeholder: "e.g., Build brand awareness, Increase local bookings",
        },
        {
          name: "budget",
          label: "Budget Range for Marketing per Month",
          type: "text",
          placeholder: "e.g., £500–£1,000 / Not sure yet",
        },
        {
          name: "usp",
          label: "Unique Selling Proposition (USP)",
          type: "text",
          placeholder: "e.g., Fast turnaround, 5-star reviews, Family-owned",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        website,
        contactInfo,
        businessType,
        targetArea,
        yearsInBusiness,
        service1,
        service2,
        service3,
        targetAudience,
        currentMarketing,
        goal1,
        goal2,
        budget,
        usp,
      }) =>
        `Create a detailed, actionable marketing plan for this business using the details provided:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nContact: ${contactInfo}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nYears in Business: ${yearsInBusiness}\nServices/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nCurrent Marketing: ${currentMarketing}\nMarketing Goals: ${goal1}, ${goal2}\nBudget: ${budget}\nUSP: ${usp}\n\nGenerate a comprehensive marketing strategy for the next 6–12 months, including:\n1. Brand Positioning & Messaging\n2. Website Optimisation & SEO Recommendations\n3. Google Business Profile Strategy\n4. Social Media Strategy (incl. platforms, posting frequency)\n5. Paid Ads (Google, Facebook/Instagram)\n6. Local PR, Networking & Review Collection\n7. Email Marketing Strategy\n8. Lead Conversion Tips (website or phone-based)\n9. Tracking, Metrics & Suggested KPIs\n10. Timeline of Activities with Priority Levels\n\nStructure the plan clearly under each heading and give it in bullet-point form with examples where relevant.\n\nFinally, place this into a presentable and visually appealing format.`,
    },

    "Marketing Report": {
      description:
        "See what's working, what's wasting money, and what to do next — all in one smart report.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        {
          name: "businessAddress",
          label: "Business Address",
          type: "text",
          placeholder: "Full address including City and Postcode",
        },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "contactInfo",
          label: "Contact Info (Email/Phone)",
          type: "text",
        },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder: "e.g., Florist, Plumbing, Fire Safety Consultancy",
        },
        {
          name: "targetArea",
          label: "Target Area / Catchment",
          type: "text",
          placeholder: "e.g., London-wide, Nationwide, Local Borough",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Landlords, Local Residents, B2B Clients",
        },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        {
          name: "hasWebsite",
          label: "Website Status",
          type: "text",
          placeholder: "Yes/No - with/without SEO",
        },
        {
          name: "hasGoogleAds",
          label: "Google Ads Status",
          type: "text",
          placeholder: "Yes/No - brief status",
        },
        {
          name: "socialMedia",
          label: "Social Media Platforms",
          type: "text",
          placeholder: "List platforms, activity level",
        },
        {
          name: "hasEmailMarketing",
          label: "Email Marketing",
          type: "text",
          placeholder: "Yes/No",
        },
        {
          name: "hasGBP",
          label: "Google Business Profile",
          type: "text",
          placeholder: "Yes/No - any reviews?",
        },
        {
          name: "marketingBudget",
          label: "Marketing Budget",
          type: "text",
          placeholder: "e.g., None, £250/month, Unknown",
        },
        {
          name: "businessGoals",
          label: "Business Goals",
          type: "text",
          placeholder:
            "e.g., Increase website traffic, Improve conversions, Build brand trust",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        website,
        contactInfo,
        businessType,
        targetArea,
        targetAudience,
        service1,
        service2,
        service3,
        hasWebsite,
        hasGoogleAds,
        socialMedia,
        hasEmailMarketing,
        hasGBP,
        marketingBudget,
        businessGoals,
      }) =>
        `Create a detailed Marketing Performance Report and Recommendations for:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nContact: ${contactInfo}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nTarget Audience: ${targetAudience}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nWebsite Status: ${hasWebsite}\nGoogle Ads: ${hasGoogleAds}\nSocial Media: ${socialMedia}\nEmail Marketing: ${hasEmailMarketing}\nGoogle Business Profile: ${hasGBP}\nMarketing Budget: ${marketingBudget}\nBusiness Goals: ${businessGoals}\n\nProduce a Marketing Report that includes:\n1. Current Visibility Assessment (Website, Google presence, Social Media)\n2. Strengths & Weaknesses\n3. Local SEO & GBP Audit\n4. Website UX & Conversion Review\n5. Ad Spend Review (if applicable)\n6. Social Media Activity & Effectiveness\n7. Competitor Comparison (based on publicly available info)\n8. Lead Generation & Nurturing Gaps\n9. Recommendations for Improvement\n10. Top 5 Priority Actions with Immediate Impact\n\nStructure the report clearly with headings, bullet points, and explain technical terms where needed. Keep the tone professional, helpful, and practical for a small-to-medium business.`,
    },

    "Sentiment Analysis": {
      description:
        "Dig into the vibes behind your reviews, posts, and brand mentions — good, bad, and brutal.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Hair Salon, Fire Safety Services, Café, E-commerce",
        },
        {
          name: "targetArea",
          label: "Target Area / Location",
          type: "text",
          placeholder: "e.g., City-wide, UK, Local Borough",
        },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        {
          name: "reviewPlatforms",
          label: "Review Platforms Used",
          type: "text",
          placeholder: "e.g., Google, Trustpilot, Yell, Facebook",
        },
        {
          name: "socialPlatforms",
          label: "Social Media Platforms",
          type: "text",
          placeholder: "e.g., Instagram, Facebook, Twitter/X, LinkedIn",
        },
        {
          name: "customerChannels",
          label: "Customer Interaction Channels",
          type: "text",
          placeholder: "e.g., Email, Phone, WhatsApp, Live Chat, Face-to-Face",
        },
        {
          name: "keyThemes",
          label: "Key Customer Concerns/Feedback Themes",
          type: "text",
          placeholder:
            "e.g., Response times, Quality, Pricing, Staff friendliness",
        },
      ],
      prompt: ({
        companyName,
        website,
        businessType,
        targetArea,
        service1,
        service2,
        service3,
        reviewPlatforms,
        socialPlatforms,
        customerChannels,
        keyThemes,
      }) =>
        `Conduct a sentiment analysis for the following business based on available online content:\n\nCompany: ${companyName}\nWebsite: ${website}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nReview Platforms: ${reviewPlatforms}\nSocial Media Platforms: ${socialPlatforms}\nCustomer Interaction Channels: ${customerChannels}\nKey Themes (if known): ${keyThemes}\n\nGenerate a Sentiment Analysis Report that includes:\n1. Overall Sentiment Summary (positive, neutral, negative – with percentages if possible)\n2. Key Themes Detected (e.g., quality, service, value for money, communication)\n3. Common Customer Phrases or Keywords (from reviews or comments)\n4. Platform-by-Platform Breakdown (Google vs Facebook vs Trustpilot etc.)\n5. Reputation Strengths\n6. Areas of Concern or Repeated Negative Sentiment\n7. Recommendations to Improve Public Perception\n8. Suggested Responses to Negative Feedback\n9. Tone of Voice Suggestions for Customer Replies\n10. Monitoring Tools or Next Steps\n\nKeep the tone professional but accessible, and present findings in a structured way with bullet points, short summaries, and actionable next steps.`,
    },

    "Local Business Collaboration": {
      description:
        "Team up and grow. Discover smart ways to partner with local businesses for leads, visibility, and community clout.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        {
          name: "businessAddress",
          label: "Business Address",
          type: "text",
          placeholder: "Full address including City and Postcode",
        },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Estate Agent, Electrician, Fire Safety Consultancy",
        },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        {
          name: "targetAudience",
          label: "Target Audience/Clients",
          type: "text",
          placeholder: "e.g., Homeowners, Business Owners, Landlords",
        },
        {
          name: "targetArea",
          label: "Catchment Area/Operating Region",
          type: "text",
          placeholder: "e.g., Ealing, Greater London, Nationwide",
        },
        {
          name: "businessGoals",
          label: "Business Goals",
          type: "text",
          placeholder:
            "e.g., Increase referrals, Build local trust, Joint promotions",
        },
        {
          name: "existingCollabs",
          label: "Existing Collaborations",
          type: "text",
          placeholder: "Yes/No - brief details",
        },
        {
          name: "idealPartners",
          label: "Ideal Business Types for Collaboration",
          type: "text",
          placeholder:
            "e.g., Builders, Solicitors, Mortgage Brokers, Cafés, Event Planners",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        website,
        businessType,
        service1,
        service2,
        service3,
        targetAudience,
        targetArea,
        businessGoals,
        existingCollabs,
        idealPartners,
      }) =>
        `Create a strategy to help the following business identify, approach, and collaborate with other local businesses for mutual growth:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nBusiness Type: ${businessType}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nTarget Area: ${targetArea}\nBusiness Goals: ${businessGoals}\nExisting Collaborations: ${existingCollabs}\nIdeal Partners: ${idealPartners}\n\nGenerate a Local Business Collaboration Strategy that includes:\n1. Top 5 Types of Local Businesses to Collaborate With\n2. Ideal Collaboration Formats (e.g., referral schemes, bundle offers, co-hosted events)\n3. How to Identify High-Potential Partners in the Area\n4. Email or Outreach Message Templates for Initial Contact\n5. Joint Marketing Ideas (flyers, social posts, Google reviews for each other, etc.)\n6. Ways to Track and Measure Success of Partnerships\n7. Legal or Practical Considerations (e.g., affiliate agreements, disclaimers)\n8. Collaboration Do's and Don'ts\n9. Tips for Strengthening Relationships Over Time\n10. Next Steps and Timeline for Execution\n\nStructure the output clearly with bullet points and headings. Keep the tone practical and friendly, suitable for small to medium-sized local businesses aiming to grow their network.`,
    },

    "Business Coaching & Strategy": {
      description:
        "Your business wingman. From vision to action, get tailored coaching and strategies to help you level up — minus the fluff.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        {
          name: "ownerName",
          label: "Business Owner/Contact Name",
          type: "text",
        },
        {
          name: "businessAddress",
          label: "Business Address",
          type: "text",
          placeholder: "Full address including City and Postcode",
        },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "industry",
          label: "Industry/Sector",
          type: "text",
          placeholder: "e.g., Fire Safety, Digital Marketing, Trades, Retail",
        },
        {
          name: "yearsOperation",
          label: "Years in Operation",
          type: "text",
          placeholder: "e.g., Start-up, 3 years, 10+ years",
        },
        {
          name: "teamSize",
          label: "Current Team Size",
          type: "text",
          placeholder: "e.g., Solo, 5 employees, Remote team",
        },
        { name: "service1", label: "Core Service/Product 1", type: "text" },
        { name: "service2", label: "Core Service/Product 2", type: "text" },
        { name: "service3", label: "Core Service/Product 3", type: "text" },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Local clients, Nationwide B2B, E-commerce buyers",
        },
        {
          name: "businessGoal1",
          label: "Main Business Goal 1",
          type: "text",
          placeholder: "e.g., Increase revenue, Build systems",
        },
        {
          name: "businessGoal2",
          label: "Main Business Goal 2",
          type: "text",
          placeholder: "e.g., Improve leadership, Prepare for exit",
        },
        {
          name: "challenge1",
          label: "Biggest Challenge 1",
          type: "text",
          placeholder: "e.g., Poor delegation, Lack of leads",
        },
        {
          name: "challenge2",
          label: "Biggest Challenge 2",
          type: "text",
          placeholder: "e.g., Low staff motivation, No marketing structure",
        },
        {
          name: "revenueRange",
          label: "Monthly Revenue Range",
          type: "text",
          placeholder: "e.g., £5K–£10K, £50K+, N/A",
          optional: true,
        },
        {
          name: "longTermVision",
          label: "Long-Term Vision (3-5 years)",
          type: "text",
          placeholder:
            "e.g., Scale nationally, Hire a COO, Sell business, Open 3 locations",
        },
      ],
      prompt: ({
        companyName,
        ownerName,
        businessAddress,
        website,
        industry,
        yearsOperation,
        teamSize,
        service1,
        service2,
        service3,
        targetAudience,
        businessGoal1,
        businessGoal2,
        challenge1,
        challenge2,
        revenueRange,
        longTermVision,
      }) =>
        `Act as a business coach and strategic advisor. Create a tailored business growth and development plan for the following company:\n\nCompany: ${companyName}\nOwner: ${ownerName}\nAddress: ${businessAddress}\nWebsite: ${website}\nIndustry: ${industry}\nYears in Operation: ${yearsOperation}\nTeam Size: ${teamSize}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nMain Business Goals: ${businessGoal1}, ${businessGoal2}\nBiggest Challenges: ${challenge1}, ${challenge2}${revenueRange ? `\nMonthly Revenue Range: ${revenueRange}` : ""}\nLong-Term Vision: ${longTermVision}\n\nGenerate a Business Coaching & Strategy Plan that includes:\n1. Business Health Check Summary (SWOT: strengths, weaknesses, opportunities, threats)\n2. Clarity of Vision & Mission Evaluation\n3. Key Strategic Priorities for the Next 12 Months\n4. Leadership & Team Development Plan\n5. Sales & Marketing Recommendations\n6. Systemisation & Workflow Optimisation\n7. Client Retention and Growth Opportunities\n8. KPIs to Track Progress\n9. Monthly Coaching Focus Areas (Month-by-month suggested roadmap)\n10. Top 5 Immediate Action Points\n\nProvide the output in a coaching-friendly tone, structured by section with practical tips and insights — as if the user were receiving it from a top-tier business strategist or mentor.`,
    },

    "Optimise Business Profile": {
      description:
        "Be the business everyone finds (and chooses). Polish your Google profile to shine in search, attract clicks, and turn views into calls.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        {
          name: "businessAddress",
          label: "Business Address",
          type: "text",
          placeholder: "Full address including City and Postcode",
        },
        { name: "phoneNumber", label: "Phone Number", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder: "e.g., Accountant, Fire Safety Consultant, Plumber",
        },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        {
          name: "businessHours",
          label: "Business Hours",
          type: "text",
          placeholder: "e.g., Mon–Fri 9am–5pm",
        },
        {
          name: "serviceArea",
          label: "Service Area (if applicable)",
          type: "text",
          placeholder: "e.g., 10-mile radius, Greater London, Nationwide",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Homeowners, Businesses, Landlords",
        },
        {
          name: "currentGBP",
          label: "Current GBP Status",
          type: "text",
          placeholder: "e.g., Verified, Incomplete, No reviews, Low activity",
        },
        {
          name: "competitor",
          label: "Competitor Example (Optional)",
          type: "text",
          placeholder: "Insert a local competitor's GBP or business name",
          optional: true,
        },
        {
          name: "hasPhotos",
          label: "Photos or Videos Available",
          type: "text",
          placeholder: "Yes/No – specify types if any",
        },
        {
          name: "reviewCount",
          label: "Number of Reviews (and Average Rating)",
          type: "text",
          placeholder: "e.g., 18 reviews – 4.2 stars",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        phoneNumber,
        website,
        businessType,
        service1,
        service2,
        service3,
        businessHours,
        serviceArea,
        targetAudience,
        currentGBP,
        competitor,
        hasPhotos,
        reviewCount,
      }) =>
        `Create a detailed optimisation plan for the Google Business Profile (GBP) of the following company to improve local search visibility, engagement, and lead generation:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nPhone: ${phoneNumber}\nWebsite: ${website}\nBusiness Type: ${businessType}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nBusiness Hours: ${businessHours}\nService Area: ${serviceArea}\nTarget Audience: ${targetAudience}\nCurrent GBP Status: ${currentGBP}${competitor ? `\nCompetitor Example: ${competitor}` : ""}\nPhotos/Videos Available: ${hasPhotos}\nReviews: ${reviewCount}\n\nGenerate a step-by-step Google Business Profile Optimisation Plan that includes:\n1. Profile Completion Checklist (Categories, Description, Services, Products, etc.)\n2. Keyword Suggestions for Business Description & Services\n3. Photo/Video Upload Strategy (What to add, how often, formatting tips)\n4. Google Post Strategy (Types of posts, frequency, content tips)\n5. Review Strategy (How to ask for reviews, suggested email/message templates)\n6. Review Response Strategy (Tone, keywords, best practices)\n7. Q&A Section Management (Suggested FAQs to pre-fill)\n8. Local SEO Tips for GBP Ranking Boost\n9. Competitor Comparison & Positioning Suggestions\n10. Ongoing Monthly Maintenance Plan\n\nStructure the response into actionable sections, use clear headings, and include examples where possible. The tone should be professional and tailored for a small to medium-sized local business.`,
    },

    "Competitor Analysis": {
      description:
        "Know thy enemy. Spy on your rivals (ethically), find their weaknesses, and sharpen your competitive edge.",
      inputs: [
        { name: "companyName", label: "Your Company Name", type: "text" },
        { name: "website", label: "Your Website URL", type: "text" },
        {
          name: "businessType",
          label: "Your Business Type / Industry",
          type: "text",
          placeholder: "e.g., Fire Risk Assessments, Plumbing, Legal Services",
        },
        {
          name: "targetMarket",
          label: "Target Market or Area",
          type: "text",
          placeholder: "e.g., Ilford, Greater London, Nationwide",
        },
        { name: "service1", label: "Core Service/Product 1", type: "text" },
        { name: "service2", label: "Core Service/Product 2", type: "text" },
        { name: "service3", label: "Core Service/Product 3", type: "text" },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Residential Landlords, SMEs, Property Managers",
        },
        { name: "competitor1Name", label: "Competitor 1 Name", type: "text" },
        {
          name: "competitor1Website",
          label: "Competitor 1 Website",
          type: "text",
        },
        { name: "competitor2Name", label: "Competitor 2 Name", type: "text" },
        {
          name: "competitor2Website",
          label: "Competitor 2 Website",
          type: "text",
        },
        {
          name: "competitor3Name",
          label: "Competitor 3 Name (optional)",
          type: "text",
          optional: true,
        },
        {
          name: "competitor3Website",
          label: "Competitor 3 Website (optional)",
          type: "text",
          optional: true,
        },
        {
          name: "competitor4Name",
          label: "Competitor 4 Name (optional)",
          type: "text",
          optional: true,
        },
        {
          name: "competitor4Website",
          label: "Competitor 4 Website (optional)",
          type: "text",
          optional: true,
        },
        {
          name: "learningGoals",
          label: "What You Want to Learn",
          type: "text",
          placeholder:
            "e.g., Pricing strategy, Marketing activity, Reputation gaps, SEO performance",
        },
      ],
      prompt: ({
        companyName,
        website,
        businessType,
        targetMarket,
        service1,
        service2,
        service3,
        targetAudience,
        competitor1Name,
        competitor1Website,
        competitor2Name,
        competitor2Website,
        competitor3Name,
        competitor3Website,
        competitor4Name,
        competitor4Website,
        learningGoals,
      }) => {
        let competitorsText = `Competitor 1: ${competitor1Name} (${competitor1Website})\nCompetitor 2: ${competitor2Name} (${competitor2Website})`;
        if (competitor3Name && competitor3Website) {
          competitorsText += `\nCompetitor 3: ${competitor3Name} (${competitor3Website})`;
        }
        if (competitor4Name && competitor4Website) {
          competitorsText += `\nCompetitor 4: ${competitor4Name} (${competitor4Website})`;
        }

        return `Conduct a comprehensive competitor analysis for the following business, including comparison across online visibility, services, reputation, and marketing strategy:\n\nYour Company: ${companyName}\nYour Website: ${website}\nBusiness Type: ${businessType}\nTarget Market: ${targetMarket}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nMain Competitors:\n${competitorsText}\nLearning Goals: ${learningGoals}\n\nGenerate a Competitor Analysis Report that includes:\n1. Company Overview Comparison (Years active, size, areas covered)\n2. Service Offering Comparison (Breadth, depth, positioning)\n3. Website Performance & SEO (Speed, mobile friendliness, keyword ranking estimates)\n4. Google Business Profile Comparison (Reviews, activity, completeness)\n5. Social Media Presence & Activity (Platforms used, post frequency, engagement levels)\n6. Online Reputation Summary (Star ratings, review counts, sentiment trends)\n7. Pricing Transparency & Positioning (If pricing info is available)\n8. Strengths & Weaknesses of Each Competitor\n9. Opportunities for Differentiation\n10. Strategic Recommendations for Your Business\n\nStructure the report using clear headings and bullet points. Keep the tone analytical but actionable, aimed at helping a business refine its marketing and service strategy based on the local competition.`;
      },
    },
    "Local Lead Gen": {
      description:
        "Get the phone ringing. Turn nearby searches into real leads — with local strategies that actually work.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "phoneNumber", label: "Phone Number", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Fire Safety Consultancy, Cleaning Services, Electrician",
        },
        { name: "service1", label: "Core Service/Product 1", type: "text" },
        { name: "service2", label: "Core Service/Product 2", type: "text" },
        { name: "service3", label: "Core Service/Product 3", type: "text" },
        {
          name: "targetArea",
          label: "Target Area / Catchment",
          type: "text",
          placeholder:
            "e.g., Within 15 miles of Croydon, Central London, Essex",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Homeowners, Commercial Landlords, SMEs",
        },
        {
          name: "marketingChannels",
          label: "Current Marketing Channels in Use",
          type: "text",
          placeholder:
            "e.g., Google Ads, Facebook Ads, Google Business Profile, Website SEO",
        },
        {
          name: "monthlyBudget",
          label: "Monthly Marketing Budget",
          type: "text",
          placeholder: "e.g., £500/month, Not set, Up to £2K",
        },
        {
          name: "leadHandlingProcess",
          label: "Lead Handling Process",
          type: "text",
          placeholder: "e.g., Direct calls, Contact form, WhatsApp, CRM use",
        },
        {
          name: "businessGoals",
          label: "Business Goals",
          type: "text",
          placeholder:
            "e.g., 10 new client leads per week, 25% increase in local calls, grow mailing list",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        website,
        phoneNumber,
        businessType,
        service1,
        service2,
        service3,
        targetArea,
        targetAudience,
        marketingChannels,
        monthlyBudget,
        leadHandlingProcess,
        businessGoals,
      }) => {
        return `Create a comprehensive local lead generation strategy for the following business to increase inbound enquiries, bookings, or calls from the local area:\n\nCompany Name: ${companyName}\nBusiness Address: ${businessAddress}\nWebsite URL: ${website}\nPhone Number: ${phoneNumber}\nBusiness Type: ${businessType}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Area / Catchment: ${targetArea}\nTarget Audience: ${targetAudience}\nCurrent Marketing Channels in Use: ${marketingChannels}\nMonthly Marketing Budget: ${monthlyBudget}\nLead Handling Process: ${leadHandlingProcess}\nBusiness Goals: ${businessGoals}\n\nGenerate a Local Lead Generation Strategy that includes:\n1. Lead Source Audit (Where leads are likely to come from or being lost)\n2. Local SEO Optimisation Tips (including GBP, citations, keyword strategy)\n3. Google Ads Setup Recommendations (Targeting, ad types, local extensions)\n4. Facebook/Instagram Ad Suggestions (Creative angles, audience targeting)\n5. Lead Magnet Ideas (Free guides, checklists, audits, discounts)\n6. Conversion Optimisation for Website & Contact Points\n7. Referral and Review-Based Lead Boosting Techniques\n8. Local PR and Partnership Ideas for Exposure\n9. CRM / Lead Tracking Suggestions (If applicable)\n10. 30-Day Action Plan to Increase Local Leads\n\nStructure the response with clear headings, bullet points, and a prioritised plan of action. Make the output suitable for a local service business aiming to increase visibility and convert interest into enquiries.`;
      },
    },
    "Estimating & Job Quoter": {
      description:
        "Quote it like a pro. Make pricing simple, sharp, and stress-free with clean, client-ready job quotes in seconds.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "contactInfo", label: "Phone / Email Contact", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Fire Risk Assessments, Landscaping, Home Renovations",
        },
        { name: "service1", label: "Main Service Offered 1", type: "text" },
        { name: "service2", label: "Main Service Offered 2", type: "text" },
        { name: "service3", label: "Main Service Offered 3", type: "text" },
        {
          name: "serviceArea",
          label: "Service Area / Region Covered",
          type: "text",
          placeholder: "e.g., Greater London, East Midlands, UK-wide",
        },
        {
          name: "clientTypes",
          label: "Client Types",
          type: "text",
          placeholder:
            "e.g., Residential, Commercial, Landlords, Public Sector",
        },
        {
          name: "projectSizes",
          label: "Typical Project Sizes or Ranges",
          type: "text",
          placeholder: "e.g., £200–£2,000, or £3K+ full jobs",
        },
        {
          name: "quotingMethod",
          label: "Current Method for Quoting",
          type: "text",
          placeholder:
            "e.g., Manual Excel sheet, Email replies, Verbal estimates",
        },
        {
          name: "quotingChallenges",
          label: "Quoting Challenges Faced",
          type: "text",
          placeholder:
            "e.g., Inconsistent pricing, Delayed replies, Low conversion rate",
        },
        {
          name: "desiredOutcome",
          label: "Desired Outcome",
          type: "text",
          placeholder:
            "e.g., Faster quoting, More accepted quotes, Better margin control",
        },
      ],
      prompt: ({
        companyName,
        businessAddress,
        website,
        contactInfo,
        businessType,
        service1,
        service2,
        service3,
        serviceArea,
        clientTypes,
        projectSizes,
        quotingMethod,
        quotingChallenges,
        desiredOutcome,
      }) => {
        return `Create a tailored estimating and job quoting system for the following service-based business to improve consistency, professionalism, and conversion rates for incoming enquiries:\n\nCompany Name: ${companyName}\nBusiness Address: ${businessAddress}\nWebsite URL: ${website}\nPhone / Email Contact: ${contactInfo}\nBusiness Type: ${businessType}\nMain Services Offered: ${service1}, ${service2}, ${service3}\nService Area / Region Covered: ${serviceArea}\nClient Types: ${clientTypes}\nTypical Project Sizes or Ranges: ${projectSizes}\nCurrent Method for Quoting: ${quotingMethod}\nQuoting Challenges Faced: ${quotingChallenges}\nDesired Outcome: ${desiredOutcome}\n\nGenerate a professional Estimating & Job Quoting System that includes:\n1. Quote Structure Template (What sections every quote should include)\n2. Suggested Tools or Platforms for Quote Generation (e.g., Google Sheets, Jobber, Quotient)\n3. Pre-set Price Guide Examples (if relevant to industry)\n4. Variables to Consider When Estimating (e.g., labour, travel, materials, urgency)\n5. Upsell Opportunities and Optional Add-ons\n6. Follow-up Process After Sending a Quote (Templates and timing)\n7. Mobile or On-Site Quoting Tips (if applicable)\n8. Terms & Conditions / Payment Terms Recommendations\n9. Branding Tips for Quotes (Professional design, logo, company details)\n10. Quote-to-Job Conversion Boosters (e.g., instant booking links, testimonials, guarantee badges)\n\nPresent the output with clear sections, practical tools, and step-by-step tips — suitable for improving both speed and professionalism in quoting jobs for a local service business.`;
      },
    },
  },
  "marketing-seo": {
    "Competitor List": {
      description:
        "See who you're up against. Generate a tailored list of local or industry-specific competitors in seconds.",
      inputs: [
        { name: "businessName", label: "Your Business Name", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Roofing, Digital Marketing, Fire Safety Consultancy",
        },
        {
          name: "location",
          label: "Location / Catchment Area",
          type: "text",
          placeholder:
            "e.g., East London, UK-wide, 15-mile radius around Manchester",
        },
        { name: "service1", label: "Main Service / Offering 1", type: "text" },
        { name: "service2", label: "Main Service / Offering 2", type: "text" },
        { name: "service3", label: "Main Service / Offering 3", type: "text" },
        {
          name: "filters",
          label: "Optional Filters",
          type: "text",
          placeholder:
            "e.g., Only top-rated, Only within 10 miles, Exclude national chains",
          optional: true,
        },
      ],
      prompt: ({
        businessName,
        businessType,
        location,
        service1,
        service2,
        service3,
        filters,
      }) =>
        `Based on the business details below, generate a list of relevant competitors. Focus on businesses offering similar services in the same target area. Include their names, websites (if available), and a brief note on what they do or how they compare.\n\nBusiness Name: ${businessName}\nBusiness Type: ${businessType}\nLocation / Catchment Area: ${location}\nMain Services / Offerings: ${service1}, ${service2}, ${service3}\n${filters ? `Optional Filters: ${filters}` : ""}`,
    },

    "Keywords Generator": {
      description:
        "Find the right words. Get high-impact keywords tailored to your services and location.",
      inputs: [
        {
          name: "businessName",
          label: "Business Name",
          type: "text",
          placeholder: "Insert company name",
          optional: true,
        },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder:
            "e.g., Electrician, Probate Solicitor, Digital Marketing Agency",
        },
        {
          name: "service1",
          label: "Target Service or Product 1",
          type: "text",
        },
        {
          name: "service2",
          label: "Target Service or Product 2",
          type: "text",
        },
        {
          name: "service3",
          label: "Target Service or Product 3",
          type: "text",
        },
        {
          name: "location",
          label: "Target Location / Area",
          type: "text",
          placeholder: "e.g., London, Birmingham, UK-wide",
        },
        {
          name: "goal",
          label: "Primary Goal",
          type: "text",
          placeholder: "e.g., Improve SEO, Run Google Ads, Rank locally",
        },
        {
          name: "notes",
          label: "Optional Notes",
          type: "text",
          placeholder: "e.g., Avoid branded terms / Focus on commercial intent",
          optional: true,
        },
      ],
      prompt: ({
        businessName,
        businessType,
        service1,
        service2,
        service3,
        location,
        goal,
        notes,
      }) =>
        `Generate a list of relevant keywords based on the business details below. Include a mix of high-intent, local, and long-tail keywords where appropriate. Prioritise terms that are likely to attract targeted traffic or leads.\n\n${businessName ? `Business Name: ${businessName}\n` : ""}Business Type: ${businessType}\nTarget Services or Products: ${service1}, ${service2}, ${service3}\nTarget Location / Area: ${location}\nPrimary Goal: ${goal}\n${notes ? `Additional Notes: ${notes}` : ""}`,
    },

    "Related Business Categories": {
      description:
        "Explore smart add-ons. Discover industries and services that naturally connect with your business.",
      inputs: [
        {
          name: "businessName",
          label: "Business Name",
          type: "text",
          placeholder: "Insert your company name",
          optional: true,
        },
        {
          name: "businessType",
          label: "Primary Industry or Business Type",
          type: "text",
          placeholder: "e.g., Fire Safety, Web Design, Landscaping",
        },
        { name: "service1", label: "Core Service / Offering 1", type: "text" },
        { name: "service2", label: "Core Service / Offering 2", type: "text" },
        { name: "service3", label: "Core Service / Offering 3", type: "text" },
        {
          name: "targetMarket",
          label: "Target Market / Clients",
          type: "text",
          placeholder: "e.g., Landlords, SMEs, Local homeowners",
        },
        {
          name: "purpose",
          label: "Purpose of the Category Suggestions",
          type: "text",
          placeholder:
            "e.g., Business expansion, Cross-marketing, Lead partnerships",
        },
      ],
      prompt: ({
        businessName,
        businessType,
        service1,
        service2,
        service3,
        targetMarket,
        purpose,
      }) =>
        `Based on the business information provided, generate a list of related or complementary business categories. Include options that could lead to strategic growth, service expansion, or local partnerships.\n\n${businessName ? `Business Name: ${businessName}\n` : ""}Primary Industry: ${businessType}\nCore Services / Offerings: ${service1}, ${service2}, ${service3}\nTarget Market / Clients: ${targetMarket}\nPurpose of Suggestions: ${purpose}`,
    },
  },
  "social-media-posts": {
    "Google My Business": {
      description:
        "Stay active and local. Create a post for your Google profile that attracts attention — and action.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "businessType",
          label: "Type of Business / Industry",
          type: "text",
          placeholder: "e.g., Fire Risk Assessments, Beauty Salon, Law Firm",
        },
        {
          name: "postType",
          label: "Post Type",
          type: "text",
          placeholder:
            "e.g., Announcement, Special Offer, Service Highlight, Event, Seasonal Message",
        },
        {
          name: "mainMessage",
          label: "Main Message or Topic",
          type: "text",
          placeholder:
            "e.g., Now offering weekend appointments / 10% off this month / Meet our team",
        },
        {
          name: "targetLocation",
          label: "Target Location / Audience",
          type: "text",
          placeholder: "e.g., Croydon, East London, Local homeowners",
        },
        {
          name: "callToAction",
          label: "Preferred Call to Action",
          type: "text",
          placeholder: "e.g., Call now, Learn more, Book today",
        },
        {
          name: "tone",
          label: "Tone (optional)",
          type: "text",
          placeholder: "e.g., Friendly, Professional, Energetic",
        },
        {
          name: "numberOfPosts",
          label: "Number of Posts to Generate",
          type: "select",
          options: ["1", "5", "10", "15", "30", "50"],
        },
      ],
      prompt: ({
        businessName,
        businessType,
        postType,
        mainMessage,
        targetLocation,
        callToAction,
        tone,
        numberOfPosts,
      }) =>
        `Create ${numberOfPosts} compelling Google Business Profile ${numberOfPosts > 1 ? "posts" : "post"} for the business below. Make ${numberOfPosts > 1 ? "them" : "it"} engaging, relevant to the audience, and optimised to encourage clicks, calls, or bookings. Include a clear call to action.\n\nBusiness Name: ${businessName}\nBusiness Type: ${businessType}\nPost Type: ${postType}\nMain Message: ${mainMessage}\nTarget Location/Audience: ${targetLocation}\nCall to Action: ${callToAction}${tone ? `\nTone: ${tone}` : ""}`,
    },

    LinkedIn: {
      description:
        "Build your presence. Create professional LinkedIn posts to grow your brand and spark engagement.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "industry",
          label: "Industry / Sector",
          type: "text",
          placeholder: "e.g., Fire Engineering, Marketing, Software, Legal",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Property professionals, SME owners, HR managers",
        },
        {
          name: "keyMessage1",
          label: "Key Message/Theme 1 (optional)",
          type: "text",
          placeholder: "e.g., Industry tips, Business milestones",
        },
        {
          name: "keyMessage2",
          label: "Key Message/Theme 2 (optional)",
          type: "text",
          placeholder: "e.g., Case studies, Recruitment",
        },
        {
          name: "keyMessage3",
          label: "Key Message/Theme 3 (optional)",
          type: "text",
          placeholder: "e.g., Partnerships, Product launches",
        },
        {
          name: "tonePreference",
          label: "Tone Preference",
          type: "text",
          placeholder:
            "e.g., Professional, Insightful, Conversational, Thought-leadership",
        },
        {
          name: "ctaStyle",
          label: "Call to Action Style (optional)",
          type: "text",
          placeholder:
            "e.g., Invite comments, Link to service, Encourage contact",
        },
        {
          name: "numberOfPosts",
          label: "Number of Posts to Generate",
          type: "select",
          options: ["1", "5", "10", "15", "30", "50"],
        },
      ],
      prompt: ({
        businessName,
        industry,
        targetAudience,
        keyMessage1,
        keyMessage2,
        keyMessage3,
        tonePreference,
        ctaStyle,
        numberOfPosts,
      }) => {
        const keyMessages = [keyMessage1, keyMessage2, keyMessage3]
          .filter((msg) => msg)
          .join(", ");
        return `Create ${numberOfPosts} LinkedIn ${numberOfPosts > 1 ? "posts" : "post"} for the business below. ${numberOfPosts > 1 ? "Posts" : "The post"} should be professional, thought-provoking, and relevant to the business's industry or audience. ${numberOfPosts > 1 ? "Vary content types (e.g., insights, announcements, tips, team highlights)" : ""}, and include light calls to action when appropriate.\n\nBusiness Name: ${businessName}\nIndustry/Sector: ${industry}\nTarget Audience: ${targetAudience}${keyMessages ? `\nKey Messages/Themes: ${keyMessages}` : ""}\nTone Preference: ${tonePreference}${ctaStyle ? `\nCall to Action Style: ${ctaStyle}` : ""}`;
      },
    },

    Instagram: {
      description:
        "Look good, sound great. Get Instagram-ready captions to boost your brand and engagement.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder: "e.g., Skincare Clinic, Gym, Coffee Shop, Tradesperson",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Local customers, Millennials, Business owners",
        },
        {
          name: "theme1",
          label: "Post Theme 1 (optional)",
          type: "text",
          placeholder: "e.g., Promotions, Tips",
        },
        {
          name: "theme2",
          label: "Post Theme 2 (optional)",
          type: "text",
          placeholder: "e.g., Team features, Product highlights",
        },
        {
          name: "theme3",
          label: "Post Theme 3 (optional)",
          type: "text",
          placeholder: "e.g., Client feedback, Behind the scenes",
        },
        {
          name: "tonePreference",
          label: "Tone Preference",
          type: "text",
          placeholder:
            "e.g., Friendly, Fun, Trendy, Minimalist, Community-focused",
        },
        {
          name: "hashtags",
          label: "Hashtags to Include (optional)",
          type: "text",
          placeholder: "e.g., #LondonCafes, #GlowUpTips, #HomeSafety",
        },
        {
          name: "ctaStyle",
          label: "Call to Action Style (optional)",
          type: "text",
          placeholder:
            "e.g., Book now, Tag a friend, DM us, Visit the link in bio",
        },
        {
          name: "numberOfPosts",
          label: "Number of Posts to Generate",
          type: "select",
          options: ["1", "5", "10", "15", "30", "50"],
        },
      ],
      prompt: ({
        businessName,
        businessType,
        targetAudience,
        theme1,
        theme2,
        theme3,
        tonePreference,
        hashtags,
        ctaStyle,
        numberOfPosts,
      }) => {
        const themes = [theme1, theme2, theme3]
          .filter((theme) => theme)
          .join(", ");
        return `Create ${numberOfPosts} Instagram ${numberOfPosts > 1 ? "captions" : "caption"} for the business below. ${numberOfPosts > 1 ? "Captions" : "The caption"} should be engaging, visually descriptive, and relevant to the business's industry or audience. ${numberOfPosts > 1 ? "Vary content types" : ""} and include appropriate calls to action.\n\nBusiness Name: ${businessName}\nBusiness Type/Industry: ${businessType}\nTarget Audience: ${targetAudience}${themes ? `\nPost Themes: ${themes}` : ""}\nTone Preference: ${tonePreference}${hashtags ? `\nHashtags to Include: ${hashtags}` : ""}${ctaStyle ? `\nCall to Action Style: ${ctaStyle}` : ""}`;
      },
    },
  },
  other: {
    "Video Script": {
      description:
        "Script it like a pro. Create a clear, engaging video script tailored to your brand, audience, and message.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "videoPurpose",
          label: "Video Purpose",
          type: "text",
          placeholder:
            "e.g., Promo, Explainer, Testimonial, Social Ad, Event teaser",
        },
        {
          name: "targetAudience",
          label: "Target Audience",
          type: "text",
          placeholder: "e.g., Homeowners, Business clients, Local community",
        },
        {
          name: "mainMessage",
          label: "Main Message / Focus",
          type: "text",
          placeholder:
            "e.g., Why choose us?, How our service works, Limited-time offer",
        },
        {
          name: "platform",
          label: "Platform (optional)",
          type: "text",
          placeholder: "e.g., Instagram, YouTube, Website, TikTok",
        },
        {
          name: "tonePreference",
          label: "Tone Preference",
          type: "text",
          placeholder: "e.g., Friendly, Direct, Professional, Inspiring",
        },
        {
          name: "callToAction",
          label: "Call to Action",
          type: "text",
          placeholder: "e.g., Book now, Call us, Visit our website",
        },
        {
          name: "preferredLength",
          label: "Preferred Length (optional)",
          type: "text",
          placeholder: "e.g., 30 seconds, 60–90 seconds, 2 minutes",
        },
      ],
      prompt: ({
        businessName,
        videoPurpose,
        targetAudience,
        mainMessage,
        platform,
        tonePreference,
        callToAction,
        preferredLength,
      }) =>
        `Write a clear, engaging video script for the business below. The script should match the video's goal and audience, include a strong hook, explain the core message, and end with a clear call to action. Keep the tone and length appropriate for the platform.\n\nBusiness Name: ${businessName}\nVideo Purpose: ${videoPurpose}\nTarget Audience: ${targetAudience}\nMain Message/Focus: ${mainMessage}${platform ? `\nPlatform: ${platform}` : ""}\nTone Preference: ${tonePreference}\nCall to Action: ${callToAction}${preferredLength ? `\nPreferred Length: ${preferredLength}` : ""}`,
    },

    "Review Response": {
      description:
        "Reply with care. Generate polite, thoughtful responses to customer reviews — good or bad.",
      inputs: [
        { name: "customerReview", label: "Customer Review", type: "textarea" },
        {
          name: "reviewSentiment",
          label: "Review Sentiment",
          type: "select",
          options: ["Positive", "Neutral", "Negative"],
        },
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "optionalDetails",
          label: "Optional Details to Mention (if any)",
          type: "text",
          placeholder: "e.g., Specific service, Team member name, Booking date",
        },
        {
          name: "tonePreference",
          label: "Tone Preference (optional)",
          type: "text",
          placeholder: "e.g., Friendly, Formal, Sincere, Reassuring",
        },
      ],
      prompt: ({
        customerReview,
        reviewSentiment,
        businessName,
        optionalDetails,
        tonePreference,
      }) =>
        `Write a professional, personalised response to the customer review below. Match the tone of the review (${reviewSentiment.toLowerCase()}) and reflect the brand's values. Be polite, concise, and include a thank-you or resolution where appropriate.\n\nCustomer Review: "${customerReview}"\nBusiness Name: ${businessName}${optionalDetails ? `\nDetails to Mention: ${optionalDetails}` : ""}${tonePreference ? `\nTone Preference: ${tonePreference}` : ""}`,
    },

    "Review Generator": {
      description:
        "Showcase great feedback. Create realistic, positive reviews to promote your business or prepare examples.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "businessType",
          label: "Type of Business / Industry",
          type: "text",
          placeholder:
            "e.g., Electrician, Solicitor, Restaurant, Fitness Coach",
        },
        {
          name: "serviceUsed",
          label: "Service or Product Used",
          type: "text",
          placeholder:
            "e.g., Fire risk assessment, Logo design, Facial treatment",
        },
        {
          name: "highlight1",
          label: "Customer Experience Highlight 1",
          type: "text",
          placeholder: "e.g., Friendly staff, Fast service",
        },
        {
          name: "highlight2",
          label: "Customer Experience Highlight 2 (optional)",
          type: "text",
          placeholder: "e.g., Great value, Clean location",
        },
        {
          name: "highlight3",
          label: "Customer Experience Highlight 3 (optional)",
          type: "text",
          placeholder: "e.g., Professional approach, Knowledgeable team",
        },
        {
          name: "starRating",
          label: "Star Rating",
          type: "select",
          options: ["5 stars", "4 stars", "4.5 stars"],
        },
        {
          name: "numberOfReviews",
          label: "Number of Reviews to Generate",
          type: "select",
          options: ["1", "5", "10", "15", "30"],
        },
        {
          name: "tonePreference",
          label: "Tone Preference (optional)",
          type: "text",
          placeholder: "e.g., Friendly, Professional, Excited, Sincere",
        },
      ],
      prompt: ({
        businessName,
        businessType,
        serviceUsed,
        highlight1,
        highlight2,
        highlight3,
        starRating,
        numberOfReviews,
        tonePreference,
      }) => {
        const highlights = [highlight1, highlight2, highlight3]
          .filter((h) => h)
          .join(", ");
        return `Write ${numberOfReviews} realistic, positive customer ${numberOfReviews > 1 ? "reviews" : "review"} based on the details provided below. Make ${numberOfReviews > 1 ? "them" : "it"} sound natural and specific, highlighting the business's strengths, service quality, or customer experience. ${numberOfReviews > 1 ? "Vary the tone slightly between reviews." : ""}\n\nBusiness Name: ${businessName}\nBusiness Type: ${businessType}\nService/Product Used: ${serviceUsed}\nCustomer Experience Highlights: ${highlights}\nStar Rating: ${starRating}${tonePreference ? `\nTone Preference: ${tonePreference}` : ""}`;
      },
    },

    "Privacy & Terms Generator": {
      description:
        "Stay compliant with ease. Generate tailored privacy policies and terms for your website or online business.",
      inputs: [
        { name: "businessName", label: "Business Name", type: "text" },
        {
          name: "businessType",
          label: "Business Type / Industry",
          type: "text",
          placeholder: "e.g., E-commerce, Consultancy, SaaS, Tradesperson",
        },
        { name: "websiteURL", label: "Website URL", type: "text" },
        {
          name: "targetCustomers",
          label: "Target Customers",
          type: "text",
          placeholder:
            "e.g., UK consumers, EU residents, B2B clients, US users",
        },
        { name: "service1", label: "Service/Product 1", type: "text" },
        {
          name: "service2",
          label: "Service/Product 2 (optional)",
          type: "text",
        },
        {
          name: "service3",
          label: "Service/Product 3 (optional)",
          type: "text",
        },
        {
          name: "collectUserData",
          label: "Does the website collect any user data?",
          type: "text",
          placeholder: "e.g., Yes – contact forms, analytics, cookies",
        },
        {
          name: "optionalAdditions",
          label: "Optional Additions (if applicable)",
          type: "text",
          placeholder:
            "e.g., Returns policy, User accounts, Subscription terms, Age restrictions",
        },
        {
          name: "preferredFormat",
          label: "Preferred Format",
          type: "select",
          options: ["Combined document", "Separate policies"],
        },
      ],
      prompt: ({
        businessName,
        businessType,
        websiteURL,
        targetCustomers,
        service1,
        service2,
        service3,
        collectUserData,
        optionalAdditions,
        preferredFormat,
      }) => {
        const services = [service1, service2, service3]
          .filter((s) => s)
          .join(", ");
        return `Create tailored Privacy Policy and Terms & Conditions documents for the business below. Ensure the content is GDPR-compliant (if applicable), clearly written, and suitable for a public-facing website. Avoid legal jargon where possible and cover standard clauses relevant to the business type.\n\nBusiness Name: ${businessName}\nBusiness Type: ${businessType}\nWebsite URL: ${websiteURL}\nTarget Customers: ${targetCustomers}\nServices/Products Offered: ${services}\nUser Data Collection: ${collectUserData}${optionalAdditions ? `\nOptional Additions: ${optionalAdditions}` : ""}\nPreferred Format: ${preferredFormat}`;
      },
    },
  },
  "content-writing": {
    "Full Website": {
      description:
        "Create well researched and fully optimised SEO content for your entire website including Home page, About us, Main services pages x 3, and contact us",
      inputs: [
        {
          name: "businessDescription",
          label: "Business/Company Description",
          type: "textarea",
          placeholder:
            "Provide a brief description of the business/company, including how long established, mission, values, and any unique aspects that differentiate it from competitors. Example: Plumbing services company has been established since 1998, serving London and surrounding areas...",
        },
        {
          name: "companyName",
          label: "Your Business/Company Name",
          type: "text",
          placeholder: "Enter your business name",
        },
        {
          name: "service1",
          label: "Service 1 (Primary Service)",
          type: "text",
          placeholder: "Enter primary service",
        },
        {
          name: "service2",
          label: "Service 2",
          type: "text",
          placeholder: "Enter service 2",
        },
        {
          name: "service3",
          label: "Service 3",
          type: "text",
          placeholder: "Enter service 3",
        },
        {
          name: "businessAddress",
          label: "Business/Company Address",
          type: "text",
          placeholder: "Enter address (skip if not relevant)",
        },
        {
          name: "openingHours",
          label: "Opening Hours",
          type: "text",
          placeholder: "Enter opening hours (skip if not relevant)",
        },
        {
          name: "telephoneNumber",
          label: "Telephone Number",
          type: "text",
          placeholder: "Enter telephone number (skip if not relevant)",
        },
        {
          name: "emailAddress",
          label: "Email Address",
          type: "email",
          placeholder: "Enter email address (skip if not relevant)",
        },
        {
          name: "additionalKeywords",
          label: "Additional Keywords (Optional)",
          type: "textarea",
          placeholder:
            "Enter up to 5 additional keywords, separated by commas (skip if not relevant)",
        },
        {
          name: "whyChooseUs",
          label: "Why Choose Our Services?",
          type: "textarea",
          placeholder:
            "Enter 4 reasons why customers should choose you. Examples: Free quotations, over 30 years experience, same day service, fully qualified",
        },
      ],
      prompt: ({
        businessDescription,
        companyName,
        service1,
        service2,
        service3,
        businessAddress,
        openingHours,
        telephoneNumber,
        emailAddress,
        additionalKeywords,
        whyChooseUs,
      }) =>
        `Create a full SEO-optimised website content written in British English for a business website. The content should be engaging, professional, informative, and well-structured. Please generate the following six website pages:

Home Page (approx. 500–750 words)
About Us Page (approx. 500–750 words)
Three Services Pages (each approx. 750–1,000 words)
Contact Us Page (approx. 200–300 words)

Business Information:
- Company Name: ${companyName}
- Business Description: ${businessDescription}
- Service 1: ${service1}
- Service 2: ${service2}
- Service 3: ${service3}
- Address: ${businessAddress || "Not provided"}
- Opening Hours: ${openingHours || "Not provided"}
- Phone: ${telephoneNumber || "Not provided"}
- Email: ${emailAddress || "Not provided"}
- Additional Keywords: ${additionalKeywords || "Not provided"}
- Why Choose Us: ${whyChooseUs}

Please ensure:
- Clear structure with subheadings
- Bullet points where helpful
- Tone is professional but approachable
- SEO optimisation using the keywords provided
- Content must reflect credibility and trustworthiness
- All content follows British English conventions
- Include SEO elements (permalink, meta title, meta description) for each page

Structure each page clearly with titles and formatting so it can be easily readable and shows they are all separate pages.`,
    },

    "Home Page": {
      description:
        "Write well researched and SEO friendly content for your website's homepage",
      inputs: [
        {
          name: "businessDescription",
          label: "Business/Company Description",
          type: "textarea",
          placeholder:
            "Provide a brief description including how long established, mission, values, and unique aspects. Example: Plumbing services company established since 1998...",
        },
        {
          name: "companyName",
          label: "Your Business/Company Name",
          type: "text",
          placeholder: "Enter your business name",
        },
        {
          name: "service1",
          label: "Service 1 (Primary Service)",
          type: "text",
          placeholder: "Enter primary service",
        },
        {
          name: "service2",
          label: "Service 2",
          type: "text",
          placeholder: "Enter service 2",
        },
        {
          name: "service3",
          label: "Service 3",
          type: "text",
          placeholder: "Enter service 3",
        },
        {
          name: "businessAddress",
          label: "Business Address (Optional)",
          type: "text",
          placeholder: "Enter address",
        },
        {
          name: "openingHours",
          label: "Opening Hours (Optional)",
          type: "text",
          placeholder: "Enter opening hours",
        },
        {
          name: "telephoneNumber",
          label: "Telephone Number (Optional)",
          type: "text",
          placeholder: "Enter telephone number",
        },
        {
          name: "emailAddress",
          label: "Email Address (Optional)",
          type: "email",
          placeholder: "Enter email address",
        },
      ],
      prompt: ({
        businessDescription,
        companyName,
        service1,
        service2,
        service3,
        businessAddress,
        openingHours,
        telephoneNumber,
        emailAddress,
      }) =>
        `Write content for a website homepage in relation to the industry described below. Be creative in your research, focusing on a local business. Ensure the content is engaging, informative, and reflects a professional yet approachable tone. Use British English throughout.

Business Information:
- Company Name: ${companyName}
- Business Description: ${businessDescription}
- Service 1: ${service1}
- Service 2: ${service2}
- Service 3: ${service3}
- Address: ${businessAddress || "Not provided"}
- Opening Hours: ${openingHours || "Not provided"}
- Phone: ${telephoneNumber || "Not provided"}
- Email: ${emailAddress || "Not provided"}

Please generate:

**Company Overview:**
- Engaging introduction highlighting expertise, values, and commitment to quality service

**Headline Banner:**
- Headline (7 words) and content underneath (15 words)

**Mini Call to Action:**
- Create a mini call to action button text

**About Us:**
- Compelling narrative about company history, values, and mission (120-150 words)

**Services Offered:**
- Detailed descriptions for each service emphasising benefits (50 words each)

**Why Choose Us?**
- Four strong unique selling points highlighting credibility and trustworthiness

**Contact Details:**
- Welcoming invitation with contact information

**Customer Testimonials:**
- Three realistic customer testimonials

**Footer Banner:**
- Headline (7 words) and content (approx 20 words)

**Call to Action Options:**
- 5 mini call to action button options

**SEO Elements:**
- URL-friendly permalink
- Optimised meta title
- Compelling meta description

This structure ensures a comprehensive, well-researched homepage for local businesses.`,
    },

    "About Us": {
      description:
        "Write well researched and SEO friendly content for your website's about us page",
      inputs: [
        {
          name: "businessDescription",
          label: "Business/Company Description",
          type: "textarea",
          placeholder:
            "Provide a brief description including how long established, mission, values, and unique aspects...",
        },
        {
          name: "companyName",
          label: "Your Business/Company Name",
          type: "text",
          placeholder: "Enter your business name",
        },
        {
          name: "wordCount",
          label: "Word Count",
          type: "number",
          placeholder: "Enter desired word count (500-750 recommended)",
        },
      ],
      prompt: ({ businessDescription, companyName, wordCount }) =>
        `Write content for an About Us page that is professional, engaging, and well-structured. The content should reflect the company's identity while maintaining readability and clarity. Use British English throughout.

Company Information:
- Company Name: ${companyName}
- Business Description: ${businessDescription}
- Target Word Count: ${wordCount || "500-750"} words

Please include:

**Introduction:**
- Engaging opening paragraph introducing the company and core values

**Company History & Background:**
- Overview of founding, growth journey, and key milestones
- Industry experience, innovations, or special achievements

**Mission & Values:**
- Company mission and upheld values
- Commitment to quality, customer service, and key principles

**What We Do:**
- Core services or products offered
- What makes them unique and beneficial to customers

**Why Choose Us?**
- Compelling reasons for customer trust and choice
- Certifications, awards, partnerships, or distinguishing factors

**Call to Action:**
- Encourage visitors to take the next step

**SEO Elements:**
- URL-friendly permalink
- Optimised meta title
- Compelling meta description

Additional Notes:
- Well-structured with subheadings and bullet points for clarity
- SEO optimised with natural keyword incorporation
- Formal yet approachable tone aligned with company branding`,
    },

    "Service Page": {
      description:
        "Write well researched and SEO friendly content for your business services page",
      inputs: [
        {
          name: "businessDescription",
          label: "Business/Company Description",
          type: "textarea",
          placeholder:
            "Provide a brief description including how long established, mission, values...",
        },
        {
          name: "companyName",
          label: "Your Business/Company Name",
          type: "text",
          placeholder: "Enter your business name",
        },
        {
          name: "keyword1",
          label: "Keyword 1 (Primary)",
          type: "text",
          placeholder: "Enter primary keyword/service",
        },
        {
          name: "keyword2",
          label: "Keyword 2",
          type: "text",
          placeholder: "Enter keyword 2",
        },
        {
          name: "keyword3",
          label: "Keyword 3",
          type: "text",
          placeholder: "Enter keyword 3",
        },
        {
          name: "additionalKeywords",
          label: "Additional Keywords (Optional)",
          type: "textarea",
          placeholder: "Enter up to 5 additional keywords, separated by commas",
        },
        {
          name: "whyChooseUs",
          label: "Why Choose Our Services?",
          type: "textarea",
          placeholder:
            "Enter 4 reasons. Examples: Free quotations, over 30 years experience, same day service, fully qualified",
        },
        {
          name: "wordCount",
          label: "Word Count",
          type: "number",
          placeholder: "Enter desired word count (500-750 recommended)",
        },
      ],
      prompt: ({
        businessDescription,
        companyName,
        keyword1,
        keyword2,
        keyword3,
        additionalKeywords,
        whyChooseUs,
        wordCount,
      }) =>
        `Write content for a Services Page that provides in-depth details about the services offered by the company. The content should maintain a professional, formal, and businesslike tone. The content should be well-researched, informative, and engaging. Use British English throughout.

Company Information:
- Company Name: ${companyName}
- Business Description: ${businessDescription}
- Primary Keywords: ${keyword1}, ${keyword2}, ${keyword3}
- Additional Keywords: ${additionalKeywords || "Not provided"}
- Why Choose Us: ${whyChooseUs || "Generate automatically"}
- Target Word Count: ${wordCount || "500-750"} words

Please include:

**Services Overview:**
- Introduction summarising core services and industry relevance

**Detailed Service Descriptions:**
For each keyword/service:
- Detailed explanation including how it works, key features, and benefits
- Why the service is important and how it stands out from competitors
- Additional options, customisations, or related complementary services

**Why Choose Our Services?**
- Use provided reasons or generate compelling reasons highlighting reliability, efficiency, and value
- Include industry expertise, certifications, or guarantees that reinforce trust

**Call to Action:**
- Strong call to action encouraging readers to get in touch
- Suggestions like 'Give us a call today' or 'Get a free quote'

**Frequently Asked Questions (FAQs):**
- Common questions and answers related to the services

**SEO Elements:**
- URL-friendly permalink
- Optimised meta title
- Compelling meta description

Additional Notes:
- Well-structured with subheadings and bullet points for readability
- SEO optimised with natural keyword and location term incorporation`,
    },

    "Service Page - Location": {
      description:
        "Write well researched and SEO friendly content for your business services location page",
      inputs: [
        {
          name: "businessDescription",
          label: "Business/Company Description",
          type: "textarea",
          placeholder:
            "Provide a brief description including how long established, mission, values...",
        },
        {
          name: "companyName",
          label: "Your Business/Company Name",
          type: "text",
          placeholder: "Enter your business name",
        },
        {
          name: "targetLocation",
          label: "Target Location",
          type: "text",
          placeholder: "Enter target location",
        },
        {
          name: "keyword1",
          label: "Keyword 1 (Primary)",
          type: "text",
          placeholder: "Enter primary keyword/service",
        },
        {
          name: "keyword2",
          label: "Keyword 2",
          type: "text",
          placeholder: "Enter keyword 2",
        },
        {
          name: "keyword3",
          label: "Keyword 3",
          type: "text",
          placeholder: "Enter keyword 3",
        },
        {
          name: "additionalKeywords",
          label: "Additional Keywords (Optional)",
          type: "textarea",
          placeholder: "Enter up to 5 additional keywords, separated by commas",
        },
        {
          name: "whyChooseUs",
          label: "Why Choose Our Services?",
          type: "textarea",
          placeholder:
            "Enter 4 reasons. Examples: Free quotations, over 30 years experience, same day service, fully qualified",
        },
        {
          name: "wordCount",
          label: "Word Count",
          type: "number",
          placeholder: "Enter desired word count (500 recommended)",
        },
      ],
      prompt: ({
        businessDescription,
        companyName,
        targetLocation,
        keyword1,
        keyword2,
        keyword3,
        additionalKeywords,
        whyChooseUs,
        wordCount,
      }) =>
        `Write content for a Services Page that incorporates local SEO optimisation for ${targetLocation}. The location will be naturally integrated throughout the content for improved search engine visibility. The content should provide in-depth details about the services offered and maintain a professional, formal, and businesslike tone. Use British English throughout.

Company Information:
- Company Name: ${companyName}
- Business Description: ${businessDescription}
- Target Location: ${targetLocation}
- Primary Keywords: ${keyword1}, ${keyword2}, ${keyword3}
- Additional Keywords: ${additionalKeywords || "Not provided"}
- Why Choose Us: ${whyChooseUs || "Generate automatically"}
- Target Word Count: ${wordCount || "500"} words

Please include:

**Services Overview:**
- Introduction summarising core services with local relevance and SEO optimisation for ${targetLocation}

**Detailed Service Descriptions:**
Each service description should be optimised for local SEO by naturally integrating ${targetLocation}:
- Detailed explanation including how it works, key features, and benefits
- Why the service is important and how it stands out from competitors
- Additional options, customisations, or related complementary services

**Why Choose Our Services?**
- Use provided reasons or generate compelling reasons why customers in ${targetLocation} should choose these services
- Include industry expertise, certifications, or guarantees that reinforce trust and local expertise

**Call to Action:**
- Strong call to action encouraging readers in ${targetLocation} to get in touch
- Include location-specific phrases where appropriate

**Frequently Asked Questions (FAQs):**
- Common questions and answers related to the services and ${targetLocation}

**SEO Elements:**
- URL-friendly permalink
- Optimised meta title
- Compelling meta description

Additional Notes:
- Well-structured with subheadings and bullet points for readability
- Optimised for SEO by naturally incorporating keywords and ${targetLocation} for local relevance
- Ensure local SEO integration without over-repetition`,
    },

    Blog: {
      description:
        "Well researched and written Blog/Article for your website based on the topic(s) you choose",
      inputs: [
        {
          name: "mainTopic",
          label: "Main Topic",
          type: "text",
          placeholder: "Enter main topic",
        },
        {
          name: "supportingTopics",
          label: "Supporting Topics",
          type: "textarea",
          placeholder:
            "Enter related topics or keywords to focus on - separate with a comma if more than 1",
        },
        {
          name: "wordCount",
          label: "Word Count",
          type: "number",
          placeholder: "Enter desired word count (750-1000 recommended)",
        },
      ],
      prompt: ({ mainTopic, supportingTopics, wordCount }) =>
        `Write content for a Blog Article or News Post that is engaging, informative, and well-structured. The content should be professional, readable, and suitable for business or industry audiences. Use British English throughout.

Topic Information:
- Main Topic: ${mainTopic}
- Supporting Topics: ${supportingTopics || "Continue with main topic only"}
- Target Word Count: ${wordCount || "750-1000"} words

Please include:

**Title:**
- Compelling and SEO-friendly title based on the topic and key focus

**Introduction:**
- Engaging opening paragraph introducing the topic and capturing reader interest
- Clear definition of the article's purpose and reader benefits

**Main Content Sections:**
- Logical subheadings breaking content into digestible sections
- Well-researched information with relevant examples or data
- Smooth flow and easy readability

**Industry Insights or Expert Opinions (Optional):**
- Expert insights, trends, or data for credibility and authority
- Relevant and properly attributed statistics or data points

**Conclusion:**
- Summary of key takeaways
- Final thoughts encouraging further engagement or reflection

**Frequently Asked Questions (FAQs) (Optional):**
- Common questions and answers related to the article's topic if relevant

**SEO Elements:**
- URL-friendly permalink
- Optimised meta title
- Compelling meta description

Additional Notes:
- Well-structured with subheadings and bullet points for readability
- SEO optimised with natural keyword incorporation
- Professional yet engaging and approachable tone`,
    },

    FAQ: {
      description: "Write FAQ page for a specific keyword or topic",
      inputs: [
        {
          name: "mainTopic",
          label: "Main Topic or Keyword",
          type: "text",
          placeholder: "Enter main topic or keyword",
        },
      ],
      prompt: ({ mainTopic }) =>
        `Write content for a Frequently Asked Questions (FAQ) Page that is informative, well-structured, and optimised for SEO. The content should be professional, clear, and engaging while ensuring readability. Use British English throughout.

Topic: ${mainTopic}

Please include:

**Introduction:**
- Engaging opening paragraph introducing the FAQ page
- Explanation of its purpose and how it helps users find answers related to ${mainTopic}

**Frequently Asked Questions (FAQs):**
- Generate 20 well-researched frequently asked questions and corresponding answers
- Ensure relevance to ${mainTopic}
- Use real-world search queries and industry-relevant questions for SEO performance
- Structure FAQs clearly with concise, informative, and easy-to-understand answers
- Include bullet points or step-by-step explanations where applicable

**SEO Optimisation:**
- Naturally integrate ${mainTopic} throughout the FAQ page
- Use question-based search queries aligning with online search patterns
- Structure with clear subheadings for improved search visibility

**SEO Elements:**
- URL-friendly permalink based on ${mainTopic}
- Optimised meta title summarising FAQ content
- Compelling meta description highlighting the FAQ page's purpose

Additional Notes:
- Logical structure with most common/important questions first
- Clear, professional, and easy-to-understand language
- Friendly yet informative tone aligned with subject matter
- Include links to relevant pages or services where applicable
- Generate optimal length based on topic complexity`,
    },
    "Mini/Template Website Content": {
      "Full Website": {
        description:
          "Create well researched and fully optimised SEO content for your entire website. Content will consist of Home page, About us, Main services pages x 3, and contact us.",
        inputs: [
          {
            name: "businessDescription",
            label: "Business/Company Description",
            type: "textarea",
            placeholder:
              "e.g., Plumbing services company has been established since 1998, serving London and surrounding areas. We are fully qualified with over 30 years of experience, reliable, same day service and offer fixed free quotations. We work with both residential & commercial customers.",
          },
          {
            name: "companyName",
            label: "Your Business/Company Name",
            type: "text",
            placeholder: "Enter your company name",
          },
          {
            name: "service1",
            label: "Service 1",
            type: "text",
            placeholder: "Enter primary service",
          },
          {
            name: "service2",
            label: "Service 2",
            type: "text",
            placeholder: "Enter service 2",
          },
          {
            name: "service3",
            label: "Service 3",
            type: "text",
            placeholder: "Enter service 3",
          },
          {
            name: "businessAddress",
            label: "Business/Company Address",
            type: "text",
            placeholder: "Enter address (optional)",
            required: false,
          },
          {
            name: "openingHours",
            label: "Opening Hours",
            type: "text",
            placeholder: "Enter opening hours (optional)",
            required: false,
          },
          {
            name: "telephoneNumber",
            label: "Telephone Number",
            type: "text",
            placeholder: "Enter telephone number (optional)",
            required: false,
          },
          {
            name: "emailAddress",
            label: "Email Address",
            type: "email",
            placeholder: "Enter email address (optional)",
            required: false,
          },
          {
            name: "additionalKeyword1",
            label: "Additional Keyword 1",
            type: "text",
            placeholder: "Enter additional keyword (optional)",
            required: false,
          },
          {
            name: "additionalKeyword2",
            label: "Additional Keyword 2",
            type: "text",
            placeholder: "Enter additional keyword (optional)",
            required: false,
          },
          {
            name: "additionalKeyword3",
            label: "Additional Keyword 3",
            type: "text",
            placeholder: "Enter additional keyword (optional)",
            required: false,
          },
          {
            name: "additionalKeyword4",
            label: "Additional Keyword 4",
            type: "text",
            placeholder: "Enter additional keyword (optional)",
            required: false,
          },
          {
            name: "additionalKeyword5",
            label: "Additional Keyword 5",
            type: "text",
            placeholder: "Enter additional keyword (optional)",
            required: false,
          },
          {
            name: "whyChoose1",
            label: "Why Choose Us - Point 1",
            type: "text",
            placeholder: "e.g., Free quotations",
          },
          {
            name: "whyChoose2",
            label: "Why Choose Us - Point 2",
            type: "text",
            placeholder: "e.g., Over 30 years experience",
          },
          {
            name: "whyChoose3",
            label: "Why Choose Us - Point 3",
            type: "text",
            placeholder: "e.g., Same day service",
          },
          {
            name: "whyChoose4",
            label: "Why Choose Us - Point 4",
            type: "text",
            placeholder: "e.g., Fully qualified",
          },
        ],
        prompt: ({
          businessDescription,
          companyName,
          service1,
          service2,
          service3,
          businessAddress,
          openingHours,
          telephoneNumber,
          emailAddress,
          additionalKeyword1,
          additionalKeyword2,
          additionalKeyword3,
          additionalKeyword4,
          additionalKeyword5,
          whyChoose1,
          whyChoose2,
          whyChoose3,
          whyChoose4,
        }) => {
          const additionalKeywords = [
            additionalKeyword1,
            additionalKeyword2,
            additionalKeyword3,
            additionalKeyword4,
            additionalKeyword5,
          ].filter(Boolean);
          const whyChoosePoints = [
            whyChoose1,
            whyChoose2,
            whyChoose3,
            whyChoose4,
          ].filter(Boolean);

          return `Create a full SEO-optimised website content written in British English for a business website. The content should be engaging, professional, informative, and well-structured. Please generate the following six website pages:

**BUSINESS INFORMATION:**
Company Name: ${companyName}
Business Description: ${businessDescription}
Service 1: ${service1}
Service 2: ${service2}
Service 3: ${service3}
${businessAddress ? `Address: ${businessAddress}` : ""}
${openingHours ? `Opening Hours: ${openingHours}` : ""}
${telephoneNumber ? `Phone: ${telephoneNumber}` : ""}
${emailAddress ? `Email: ${emailAddress}` : ""}

${additionalKeywords.length > 0 ? `Additional Keywords: ${additionalKeywords.join(", ")}` : ""}

Why Choose Us Points:
${whyChoosePoints.map((point, index) => `${index + 1}. ${point}`).join("\n")}

**GENERATE THE FOLLOWING PAGES:**

## **HOME PAGE CONTENT** (approx. 500 words)

**Headline Banner:**
- Create headline banner content. Headline Blurb (7 words) and some content underneath (15 words)

**Mini Call to Action:**
- Create a mini call to action for a button on the website

**About Us:**
- Generate a compelling narrative about the company's history, values, and mission, making it relatable to the local community. (120-150 words)

**Why Choose Us?**
- Generate four strong unique selling points that highlight why customers should choose us ensuring credibility and trustworthiness.

**Services Offered:**
1. **${service1}**
   - Write a detailed description emphasising its benefits and how it solves customer problems. (50 words)
2. **${service2}**
   - Write a detailed description emphasising its benefits and how it solves customer problems. (50 words)
3. **${service3}**
   - Write a detailed description emphasising its benefits and how it solves customer problems. (50 words)

**Mini Blurb:**
- Generate a mini blurb with a headline. (40 words)

**Contact Details:**
${
  businessAddress || openingHours || telephoneNumber || emailAddress
    ? `
- Provide a welcoming invitation for potential customers to get in touch.
${businessAddress ? `- Address: ${businessAddress}` : ""}
${openingHours ? `- Opening Hours: ${openingHours}` : ""}
${telephoneNumber ? `- Phone: ${telephoneNumber}` : ""}
${emailAddress ? `- Email: ${emailAddress}` : ""}
`
    : "- Generate appropriate contact invitation"
}

**Customer Testimonials:**
- Generate three realistic customer testimonials related to the industry, ensuring authenticity and relevance. (Each approx 40 words)

**Frequently Asked Questions (FAQ):**
- Generate five frequently asked questions related to the industry, ensuring authenticity and relevance. (Each approx 40 words)

**Footer Banner:**
- Generate a footer banner with headline of 7 words and content approx 20 words

**Call to Action Options:**
- Create 5 x mini call to action for buttons on the website

**Company Overview:**
- Generate an engaging introduction for ${companyName}, highlighting its expertise, values, and commitment to quality service.

**SEO Elements:**
- Permalink: Generate a URL-friendly permalink
- Meta Title: Create an optimised meta title
- Meta Description: Write a compelling meta description

---

## **ABOUT US PAGE** (approx. 500-750 words)

**Introduction:**
- Generate an engaging opening paragraph that introduces ${companyName}, summarising its purpose and core values.

**Company History & Background:**
- Provide an overview of how the company was founded, its growth journey, and key milestones achieved.
- Highlight any industry experience, innovations, or special achievements.

**Mission & Values:**
- Clearly define the company's mission and the values it upholds.
- Emphasise commitment to quality, customer service, and key principles.

**What We Do:**
- Explain the core services offered by ${companyName}.
- Highlight what makes them unique, effective, or beneficial to customers.

**Why Choose Us?**
- Provide compelling reasons why customers should trust and choose ${companyName} over competitors.
- Mention any certifications, awards, partnerships, or distinguishing factors.

**Call to Action:**
- Encourage visitors to take the next step, such as getting in touch or learning more.

**SEO Elements:**
- Permalink: Generate a URL-friendly permalink
- Meta Title: Create an optimised meta title
- Meta Description: Write a compelling meta description

---

## **SERVICE PAGE 1: ${service1}** (approx. 750-1,000 words)

**Services Overview:**
- Generate an introduction that summarises ${companyName}'s core services, highlighting their relevance to customers and the industry.

**Detailed Service Description:**
- Provide a detailed explanation of ${service1}, including how it works, its key features, and its benefits to customers.
- Explain why this service is important and how it stands out compared to competitors.
- Mention any additional options, customisations, or related services that complement it.
- Break it down into 3 paragraphs with its own headline and content if relevant.

**Why Choose Our Services?**
- Use the provided points: ${whyChoosePoints.join(", ")}
- Include any industry expertise, certifications, or guarantees that reinforce trust.

**Call to Action:**
- Conclude with a strong call to action, encouraging readers to get in touch.

**Frequently Asked Questions (FAQs):**
- Generate common questions and answers related to ${service1}, ensuring potential customers have all necessary information.

**SEO Elements:**
- Permalink: Generate a URL-friendly permalink
- Meta Title: Create an optimised meta title
- Meta Description: Write a compelling meta description

---

## **SERVICE PAGE 2: ${service2}** (approx. 750-1,000 words)

[Same structure as Service Page 1, but focused on ${service2}]

---

## **SERVICE PAGE 3: ${service3}** (approx. 750-1,000 words)

[Same structure as Service Page 1, but focused on ${service3}]

---

## **CONTACT US PAGE** (approx. 200-300 words)

**Welcoming Intro:**
- Include a welcoming introduction encouraging users to reach out

**Contact Information:**
${businessAddress ? `- Address: ${businessAddress}` : "- Generate appropriate address section"}
${telephoneNumber ? `- Phone: ${telephoneNumber}` : "- Generate appropriate phone section"}
${emailAddress ? `- Email: ${emailAddress}` : "- Generate appropriate email section"}
${openingHours ? `- Opening Hours: ${openingHours}` : "- Generate appropriate opening hours section"}

**Coverage Area:**
- Include directions or coverage area if relevant

**Call to Action:**
- Simple call to action like "Get in touch today"
- Conclude with a strong call to action, encouraging readers to get in touch with phrases like: 'Give us a call today to discuss your needs,' 'Contact our dedicated specialist for expert advice,' or 'Get a free quote by reaching out to us now.'

**SEO Elements:**
- Permalink: Generate a URL-friendly permalink
- Meta Title: Create an optimised meta title
- Meta Description: Write a compelling meta description

---

**FORMATTING REQUIREMENTS:**
- Present all content with clear page titles and formatting
- Ensure content is well-structured, easy to read, and informative
- Use subheadings and bullet points where appropriate for clarity
- Optimise for SEO by naturally incorporating relevant keywords and location terms
- Maintain a professional yet approachable tone throughout
- Use British English conventions throughout all content
- Make sure each page is clearly separated and labelled

Please generate the complete web content package ready for publishing.`;
        },
      },
    },
  },
};
