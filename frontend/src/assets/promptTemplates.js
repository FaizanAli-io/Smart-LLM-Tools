export const promptTemplates = {
  "daily-business-tools": {
    "Rewrite This": {
      description: "Instantly improve your text. Make it clearer, more professional, or better suited to your audience — without changing the meaning.",
      inputs: [
        {
          name: "originalText",
          label: "Text to Rewrite",
          type: "textarea",
          placeholder: "Enter the text you'd like to improve"
        }
      ],
      prompt: ({ originalText }) =>
        `Rewrite the following text to improve its clarity, tone, and effectiveness based on the selected goal. Keep the meaning the same, but enhance the delivery:\n\n"${originalText}"`
    },

    "Suggest a Response": {
      description: "Get the perfect reply — fast. Polished, relevant, and tailored to match the message you received.",
      inputs: [
        {
          name: "incomingMessage",
          label: "Incoming Message",
          type: "textarea",
          placeholder: "Paste the message you received"
        },
        {
          name: "responseGoal",
          label: "Response Goal",
          type: "text",
          placeholder: "e.g., Answer a question, Confirm receipt"
        },
        {
          name: "tone",
          label: "Preferred Tone (optional)",
          type: "text",
          placeholder: "e.g., Friendly, Formal, Casual"
        }
      ],
      prompt: ({ incomingMessage, responseGoal, tone }) =>
        `Based on the message provided, generate a clear, appropriate, and well-written reply. Match or improve the sender’s tone if needed.\n\nIncoming Message: ${incomingMessage}\nGoal: ${responseGoal}${tone ? `\nTone: ${tone}` : ""}`
    },

    "Clarify This": {
      description: "Make confusing text simple. Turn complex or technical wording into clear, easy-to-understand language.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Insert content to clarify or explain"
        },
        {
          name: "audience",
          label: "Target Audience (optional)",
          type: "text",
          placeholder: "e.g., General public, Junior staff"
        },
        {
          name: "length",
          label: "Preferred Length (optional)",
          type: "text",
          placeholder: "e.g., Keep short / Expand with examples"
        }
      ],
      prompt: ({ originalText, audience, length }) =>
        `Rewrite the following text to make it clearer and easier to understand. Break down any jargon or complex language. Keep the original meaning intact.\n\nText: ${originalText}${audience ? `\nAudience: ${audience}` : ""}${length ? `\nLength Preference: ${length}` : ""}`
    },

    "Rewrite as Bullet Points": {
      description: "Turn long text into sharp, scannable bullet points — fast and clear.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Enter full paragraph or content"
        },
        {
          name: "style",
          label: "Preferred Style (optional)",
          type: "text",
          placeholder: "e.g., Professional, Simple summary"
        },
        {
          name: "audience",
          label: "Audience (optional)",
          type: "text",
          placeholder: "e.g., Client, General public"
        }
      ],
      prompt: ({ originalText, style, audience }) =>
        `Convert the following text into a clear, concise bullet-point format. Maintain the original meaning, remove unnecessary filler, and make it easy to scan.\n\nText: ${originalText}${style ? `\nStyle: ${style}` : ""}${audience ? `\nAudience: ${audience}` : ""}`
    },

    "Summarise This": {
      description: "Get the key points — fast. Condense long text into a short, clear summary.",
      inputs: [
        {
          name: "originalText",
          label: "Original Text",
          type: "textarea",
          placeholder: "Insert content to summarise"
        },
        {
          name: "summaryStyle",
          label: "Preferred Summary Style (optional)",
          type: "text",
          placeholder: "e.g., One sentence, Executive summary"
        },
        {
          name: "audience",
          label: "Audience (optional)",
          type: "text",
          placeholder: "e.g., Manager, Client"
        }
      ],
      prompt: ({ originalText, summaryStyle, audience }) =>
        `Read the text below and provide a concise summary that captures the key points. Keep the tone neutral and remove unnecessary detail.\n\nText: ${originalText}${summaryStyle ? `\nStyle: ${summaryStyle}` : ""}${audience ? `\nAudience: ${audience}` : ""}`
    },

    "Complaint Generator": {
      description: "Create a clear, polite, and effective complaint that gets results.",
      inputs: [
        { name: "issue", label: "What is the complaint about?", type: "text", placeholder: "e.g., Poor service, Faulty product" },
        { name: "recipient", label: "Who is it addressed to?", type: "text", placeholder: "e.g., Company, Department" },
        { name: "details", label: "What happened?", type: "textarea", placeholder: "Describe what occurred" },
        { name: "resolution", label: "Expected Resolution", type: "text", placeholder: "e.g., Refund, Apology" },
        { name: "tone", label: "Preferred Tone (optional)", type: "text", placeholder: "e.g., Polite, Urgent" }
      ],
      prompt: ({ issue, recipient, details, resolution, tone }) =>
        `Write a professional and clear complaint message based on the following:\n\nIssue: ${issue}\nTo: ${recipient}\nDetails: ${details}\nResolution Expected: ${resolution}${tone ? `\nTone: ${tone}` : ""}`
    },

    "Sales Email": {
      description: "Generate a clear, engaging sales email that gets attention and drives action.",
      inputs: [
        { name: "product", label: "Product or Service", type: "text" },
        { name: "audience", label: "Target Audience", type: "text" },
        { name: "benefit1", label: "Key Benefit 1", type: "text" },
        { name: "benefit2", label: "Key Benefit 2", type: "text" },
        { name: "benefit3", label: "Key Benefit 3", type: "text" },
        { name: "goal", label: "Goal of the Email", type: "text" },
        { name: "tone", label: "Tone Preference (optional)", type: "text" },
        { name: "offer", label: "Special Offer / Deadline (optional)", type: "text" }
      ],
      prompt: ({ product, audience, benefit1, benefit2, benefit3, goal, tone, offer }) =>
        `Write a persuasive sales email for the following:\nProduct: ${product}\nAudience: ${audience}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}\nGoal: ${goal}${tone ? `\nTone: ${tone}` : ""}${offer ? `\nSpecial Offer: ${offer}` : ""}`
    },

    "Collaboration Email": {
      description: "Reach out with a clear, friendly email that opens the door to new partnerships.",
      inputs: [
        { name: "company", label: "Your Company Name", type: "text" },
        { name: "recipient", label: "Who You're Contacting", type: "text" },
        { name: "purpose", label: "Purpose of Collaboration", type: "text" },
        { name: "proposal", label: "Your Proposal", type: "text" },
        { name: "benefit1", label: "Benefit 1", type: "text" },
        { name: "benefit2", label: "Benefit 2", type: "text" },
        { name: "benefit3", label: "Benefit 3", type: "text" },
        { name: "tone", label: "Preferred Tone (optional)", type: "text" },
        { name: "nextStep", label: "Next Step", type: "text" }
      ],
      prompt: ({ company, recipient, purpose, proposal, benefit1, benefit2, benefit3, tone, nextStep }) =>
        `Write a professional collaboration email from ${company} to ${recipient} about ${purpose}.\nProposal: ${proposal}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}${tone ? `\nTone: ${tone}` : ""}\nNext Step: ${nextStep}`
    },

    "Business Proposal": {
      description: "Create a clear, professional proposal to win new clients, deals, or partnerships.",
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
        { name: "nextStep", label: "Next Step", type: "text" }
      ],
      prompt: ({ company, recipient, purpose, offer, benefit1, benefit2, benefit3, pricing, tone, nextStep }) =>
        `Write a business proposal from ${company} to ${recipient}.\nPurpose: ${purpose}\nOffer: ${offer}\nBenefits: 1. ${benefit1}, 2. ${benefit2}, 3. ${benefit3}\nPricing: ${pricing}${tone ? `\nTone: ${tone}` : ""}\nNext Step: ${nextStep}`
    },

    "Randomise": {
      description: "Get a fresh version of your content with new wording, flow, and style.",
      inputs: [
        { name: "originalText", label: "Original Text", type: "textarea" },
        { name: "tone", label: "Tone Preference (optional)", type: "text" },
        { name: "length", label: "Length Preference (optional)", type: "text" }
      ],
      prompt: ({ originalText, tone, length }) =>
        `Rewrite the following content into a new version with different structure and word choice. Preserve the meaning.\n\nText: ${originalText}${tone ? `\nTone: ${tone}` : ""}${length ? `\nLength: ${length}` : ""}`
    },

    "Decision Maker": {
      description: "Get clear, reasoned advice to help you make the smartest choice.",
      inputs: [
        { name: "decision", label: "What's the decision about?", type: "text" },
        { name: "optionA", label: "Option A", type: "text" },
        { name: "optionB", label: "Option B", type: "text" },
        { name: "optionC", label: "Option C (optional)", type: "text" },
        { name: "goal", label: "Goal or Outcome", type: "text" },
        { name: "constraints", label: "Key Constraints (optional)", type: "text" },
        { name: "tone", label: "Tone (optional)", type: "text" }
      ],
      prompt: ({ decision, optionA, optionB, optionC, goal, constraints, tone }) =>
        `Evaluate the options for: ${decision}.\nOptions: A) ${optionA}, B) ${optionB}${optionC ? `, C) ${optionC}` : ""}\nGoal: ${goal}${constraints ? `\nConstraints: ${constraints}` : ""}${tone ? `\nTone: ${tone}` : ""}`
    }
  },
  "business-services": {
    "Competitor Financial Analysis": {
      description: "Snooping allowed. See how your rivals are really doing — and find out where you're winning (or need to).",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text", placeholder: "Enter the company name (UK registered companies only)" },
        { name: "document", label: "Additional Document", type: "file", placeholder: "Upload PDF if relevant", optional: true }
      ],
      prompt: ({ companyName, document }) =>
        `Analyse the financial position of ${companyName} based on its latest available filings on Companies House.\n\nRetrieve the balance sheet, profit and loss trends (if available), and key financial ratios.\nCompare the latest reporting period with the previous period to assess financial health, growth trends, and liquidity.\nProvide estimates for turnover and profitability based on provided data documents, including a high-level summary of the company's performance, solvency, and key business trends.\n\n${document ? "Use the attached document to help with the analysis." : ""}\n\nGive a final summary with colourful green ticks and red crosses if relevant.\n\nMake this report visually appealing with images, charts and graphs using the data in a creative way.\n\nCombine all this information and structure the findings in a detailed and presentable format.`
    },

    "Business Marketing Plan": {
      description: "Strategy, sorted. Get a complete marketing game plan to grow your brand, attract leads, and outshine the rest.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text", placeholder: "Full address including City and Postcode" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "contactInfo", label: "Contact Info (Email/Phone)", type: "text" },
        { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Florist, Plumber, Solicitor, E-commerce Store" },
        { name: "targetArea", label: "Target Area / Catchment", type: "text", placeholder: "e.g., City-wide, 20-mile radius, National" },
        { name: "yearsInBusiness", label: "Years in Business", type: "text", placeholder: "Number of years or 'New Business'" },
        { name: "service1", label: "Key Service/Product 1", type: "text" },
        { name: "service2", label: "Key Service/Product 2", type: "text" },
        { name: "service3", label: "Key Service/Product 3", type: "text" },
        { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Homeowners, SMEs, Landlords, Couples Planning Weddings" },
        { name: "currentMarketing", label: "Current Marketing Activity", type: "text", placeholder: "e.g., Website only, Google Ads, Social Media presence" },
        { name: "goal1", label: "Marketing Goal 1", type: "text", placeholder: "e.g., Generate leads, Improve SEO" },
        { name: "goal2", label: "Marketing Goal 2", type: "text", placeholder: "e.g., Build brand awareness, Increase local bookings" },
        { name: "budget", label: "Budget Range for Marketing per Month", type: "text", placeholder: "e.g., £500–£1,000 / Not sure yet" },
        { name: "usp", label: "Unique Selling Proposition (USP)", type: "text", placeholder: "e.g., Fast turnaround, 5-star reviews, Family-owned" }
      ],
      prompt: ({ companyName, businessAddress, website, contactInfo, businessType, targetArea, yearsInBusiness, service1, service2, service3, targetAudience, currentMarketing, goal1, goal2, budget, usp }) =>
        `Create a detailed, actionable marketing plan for this business using the details provided:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nContact: ${contactInfo}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nYears in Business: ${yearsInBusiness}\nServices/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nCurrent Marketing: ${currentMarketing}\nMarketing Goals: ${goal1}, ${goal2}\nBudget: ${budget}\nUSP: ${usp}\n\nGenerate a comprehensive marketing strategy for the next 6–12 months, including:\n1. Brand Positioning & Messaging\n2. Website Optimisation & SEO Recommendations\n3. Google Business Profile Strategy\n4. Social Media Strategy (incl. platforms, posting frequency)\n5. Paid Ads (Google, Facebook/Instagram)\n6. Local PR, Networking & Review Collection\n7. Email Marketing Strategy\n8. Lead Conversion Tips (website or phone-based)\n9. Tracking, Metrics & Suggested KPIs\n10. Timeline of Activities with Priority Levels\n\nStructure the plan clearly under each heading and give it in bullet-point form with examples where relevant.\n\nFinally, place this into a presentable and visually appealing format.`
    },

    "Marketing Report": {
      description: "See what's working, what's wasting money, and what to do next — all in one smart report.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text", placeholder: "Full address including City and Postcode" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "contactInfo", label: "Contact Info (Email/Phone)", type: "text" },
        { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Florist, Plumbing, Fire Safety Consultancy" },
        { name: "targetArea", label: "Target Area / Catchment", type: "text", placeholder: "e.g., London-wide, Nationwide, Local Borough" },
        { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Landlords, Local Residents, B2B Clients" },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        { name: "hasWebsite", label: "Website Status", type: "text", placeholder: "Yes/No - with/without SEO" },
        { name: "hasGoogleAds", label: "Google Ads Status", type: "text", placeholder: "Yes/No - brief status" },
        { name: "socialMedia", label: "Social Media Platforms", type: "text", placeholder: "List platforms, activity level" },
        { name: "hasEmailMarketing", label: "Email Marketing", type: "text", placeholder: "Yes/No" },
        { name: "hasGBP", label: "Google Business Profile", type: "text", placeholder: "Yes/No - any reviews?" },
        { name: "marketingBudget", label: "Marketing Budget", type: "text", placeholder: "e.g., None, £250/month, Unknown" },
        { name: "businessGoals", label: "Business Goals", type: "text", placeholder: "e.g., Increase website traffic, Improve conversions, Build brand trust" }
      ],
      prompt: ({ companyName, businessAddress, website, contactInfo, businessType, targetArea, targetAudience, service1, service2, service3, hasWebsite, hasGoogleAds, socialMedia, hasEmailMarketing, hasGBP, marketingBudget, businessGoals }) =>
        `Create a detailed Marketing Performance Report and Recommendations for:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nContact: ${contactInfo}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nTarget Audience: ${targetAudience}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nWebsite Status: ${hasWebsite}\nGoogle Ads: ${hasGoogleAds}\nSocial Media: ${socialMedia}\nEmail Marketing: ${hasEmailMarketing}\nGoogle Business Profile: ${hasGBP}\nMarketing Budget: ${marketingBudget}\nBusiness Goals: ${businessGoals}\n\nProduce a Marketing Report that includes:\n1. Current Visibility Assessment (Website, Google presence, Social Media)\n2. Strengths & Weaknesses\n3. Local SEO & GBP Audit\n4. Website UX & Conversion Review\n5. Ad Spend Review (if applicable)\n6. Social Media Activity & Effectiveness\n7. Competitor Comparison (based on publicly available info)\n8. Lead Generation & Nurturing Gaps\n9. Recommendations for Improvement\n10. Top 5 Priority Actions with Immediate Impact\n\nStructure the report clearly with headings, bullet points, and explain technical terms where needed. Keep the tone professional, helpful, and practical for a small-to-medium business.`
    },

    "Sentiment Analysis": {
      description: "Dig into the vibes behind your reviews, posts, and brand mentions — good, bad, and brutal.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Hair Salon, Fire Safety Services, Café, E-commerce" },
        { name: "targetArea", label: "Target Area / Location", type: "text", placeholder: "e.g., City-wide, UK, Local Borough" },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        { name: "reviewPlatforms", label: "Review Platforms Used", type: "text", placeholder: "e.g., Google, Trustpilot, Yell, Facebook" },
        { name: "socialPlatforms", label: "Social Media Platforms", type: "text", placeholder: "e.g., Instagram, Facebook, Twitter/X, LinkedIn" },
        { name: "customerChannels", label: "Customer Interaction Channels", type: "text", placeholder: "e.g., Email, Phone, WhatsApp, Live Chat, Face-to-Face" },
        { name: "keyThemes", label: "Key Customer Concerns/Feedback Themes", type: "text", placeholder: "e.g., Response times, Quality, Pricing, Staff friendliness" }
      ],
      prompt: ({ companyName, website, businessType, targetArea, service1, service2, service3, reviewPlatforms, socialPlatforms, customerChannels, keyThemes }) =>
        `Conduct a sentiment analysis for the following business based on available online content:\n\nCompany: ${companyName}\nWebsite: ${website}\nBusiness Type: ${businessType}\nTarget Area: ${targetArea}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nReview Platforms: ${reviewPlatforms}\nSocial Media Platforms: ${socialPlatforms}\nCustomer Interaction Channels: ${customerChannels}\nKey Themes (if known): ${keyThemes}\n\nGenerate a Sentiment Analysis Report that includes:\n1. Overall Sentiment Summary (positive, neutral, negative – with percentages if possible)\n2. Key Themes Detected (e.g., quality, service, value for money, communication)\n3. Common Customer Phrases or Keywords (from reviews or comments)\n4. Platform-by-Platform Breakdown (Google vs Facebook vs Trustpilot etc.)\n5. Reputation Strengths\n6. Areas of Concern or Repeated Negative Sentiment\n7. Recommendations to Improve Public Perception\n8. Suggested Responses to Negative Feedback\n9. Tone of Voice Suggestions for Customer Replies\n10. Monitoring Tools or Next Steps\n\nKeep the tone professional but accessible, and present findings in a structured way with bullet points, short summaries, and actionable next steps.`
    },

    "Local Business Collaboration": {
      description: "Team up and grow. Discover smart ways to partner with local businesses for leads, visibility, and community clout.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text", placeholder: "Full address including City and Postcode" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Estate Agent, Electrician, Fire Safety Consultancy" },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        { name: "targetAudience", label: "Target Audience/Clients", type: "text", placeholder: "e.g., Homeowners, Business Owners, Landlords" },
        { name: "targetArea", label: "Catchment Area/Operating Region", type: "text", placeholder: "e.g., Ealing, Greater London, Nationwide" },
        { name: "businessGoals", label: "Business Goals", type: "text", placeholder: "e.g., Increase referrals, Build local trust, Joint promotions" },
        { name: "existingCollabs", label: "Existing Collaborations", type: "text", placeholder: "Yes/No - brief details" },
        { name: "idealPartners", label: "Ideal Business Types for Collaboration", type: "text", placeholder: "e.g., Builders, Solicitors, Mortgage Brokers, Cafés, Event Planners" }
      ],
      prompt: ({ companyName, businessAddress, website, businessType, service1, service2, service3, targetAudience, targetArea, businessGoals, existingCollabs, idealPartners }) =>
        `Create a strategy to help the following business identify, approach, and collaborate with other local businesses for mutual growth:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nWebsite: ${website}\nBusiness Type: ${businessType}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nTarget Area: ${targetArea}\nBusiness Goals: ${businessGoals}\nExisting Collaborations: ${existingCollabs}\nIdeal Partners: ${idealPartners}\n\nGenerate a Local Business Collaboration Strategy that includes:\n1. Top 5 Types of Local Businesses to Collaborate With\n2. Ideal Collaboration Formats (e.g., referral schemes, bundle offers, co-hosted events)\n3. How to Identify High-Potential Partners in the Area\n4. Email or Outreach Message Templates for Initial Contact\n5. Joint Marketing Ideas (flyers, social posts, Google reviews for each other, etc.)\n6. Ways to Track and Measure Success of Partnerships\n7. Legal or Practical Considerations (e.g., affiliate agreements, disclaimers)\n8. Collaboration Do's and Don'ts\n9. Tips for Strengthening Relationships Over Time\n10. Next Steps and Timeline for Execution\n\nStructure the output clearly with bullet points and headings. Keep the tone practical and friendly, suitable for small to medium-sized local businesses aiming to grow their network.`
    },

    "Business Coaching & Strategy": {
      description: "Your business wingman. From vision to action, get tailored coaching and strategies to help you level up — minus the fluff.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "ownerName", label: "Business Owner/Contact Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text", placeholder: "Full address including City and Postcode" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "industry", label: "Industry/Sector", type: "text", placeholder: "e.g., Fire Safety, Digital Marketing, Trades, Retail" },
        { name: "yearsOperation", label: "Years in Operation", type: "text", placeholder: "e.g., Start-up, 3 years, 10+ years" },
        { name: "teamSize", label: "Current Team Size", type: "text", placeholder: "e.g., Solo, 5 employees, Remote team" },
        { name: "service1", label: "Core Service/Product 1", type: "text" },
        { name: "service2", label: "Core Service/Product 2", type: "text" },
        { name: "service3", label: "Core Service/Product 3", type: "text" },
        { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Local clients, Nationwide B2B, E-commerce buyers" },
        { name: "businessGoal1", label: "Main Business Goal 1", type: "text", placeholder: "e.g., Increase revenue, Build systems" },
        { name: "businessGoal2", label: "Main Business Goal 2", type: "text", placeholder: "e.g., Improve leadership, Prepare for exit" },
        { name: "challenge1", label: "Biggest Challenge 1", type: "text", placeholder: "e.g., Poor delegation, Lack of leads" },
        { name: "challenge2", label: "Biggest Challenge 2", type: "text", placeholder: "e.g., Low staff motivation, No marketing structure" },
        { name: "revenueRange", label: "Monthly Revenue Range", type: "text", placeholder: "e.g., £5K–£10K, £50K+, N/A", optional: true },
        { name: "longTermVision", label: "Long-Term Vision (3-5 years)", type: "text", placeholder: "e.g., Scale nationally, Hire a COO, Sell business, Open 3 locations" }
      ],
      prompt: ({ companyName, ownerName, businessAddress, website, industry, yearsOperation, teamSize, service1, service2, service3, targetAudience, businessGoal1, businessGoal2, challenge1, challenge2, revenueRange, longTermVision }) =>
        `Act as a business coach and strategic advisor. Create a tailored business growth and development plan for the following company:\n\nCompany: ${companyName}\nOwner: ${ownerName}\nAddress: ${businessAddress}\nWebsite: ${website}\nIndustry: ${industry}\nYears in Operation: ${yearsOperation}\nTeam Size: ${teamSize}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nMain Business Goals: ${businessGoal1}, ${businessGoal2}\nBiggest Challenges: ${challenge1}, ${challenge2}${revenueRange ? `\nMonthly Revenue Range: ${revenueRange}` : ""}\nLong-Term Vision: ${longTermVision}\n\nGenerate a Business Coaching & Strategy Plan that includes:\n1. Business Health Check Summary (SWOT: strengths, weaknesses, opportunities, threats)\n2. Clarity of Vision & Mission Evaluation\n3. Key Strategic Priorities for the Next 12 Months\n4. Leadership & Team Development Plan\n5. Sales & Marketing Recommendations\n6. Systemisation & Workflow Optimisation\n7. Client Retention and Growth Opportunities\n8. KPIs to Track Progress\n9. Monthly Coaching Focus Areas (Month-by-month suggested roadmap)\n10. Top 5 Immediate Action Points\n\nProvide the output in a coaching-friendly tone, structured by section with practical tips and insights — as if the user were receiving it from a top-tier business strategist or mentor.`
    },
    
    "Optimise Business Profile": {
      description: "Be the business everyone finds (and chooses). Polish your Google profile to shine in search, attract clicks, and turn views into calls.",
      inputs: [
        { name: "companyName", label: "Company Name", type: "text" },
        { name: "businessAddress", label: "Business Address", type: "text", placeholder: "Full address including City and Postcode" },
        { name: "phoneNumber", label: "Phone Number", type: "text" },
        { name: "website", label: "Website URL", type: "text" },
        { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Accountant, Fire Safety Consultant, Plumber" },
        { name: "service1", label: "Main Service/Product 1", type: "text" },
        { name: "service2", label: "Main Service/Product 2", type: "text" },
        { name: "service3", label: "Main Service/Product 3", type: "text" },
        { name: "businessHours", label: "Business Hours", type: "text", placeholder: "e.g., Mon–Fri 9am–5pm" },
        { name: "serviceArea", label: "Service Area (if applicable)", type: "text", placeholder: "e.g., 10-mile radius, Greater London, Nationwide" },
        { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Homeowners, Businesses, Landlords" },
        { name: "currentGBP", label: "Current GBP Status", type: "text", placeholder: "e.g., Verified, Incomplete, No reviews, Low activity" },
        { name: "competitor", label: "Competitor Example (Optional)", type: "text", placeholder: "Insert a local competitor's GBP or business name", optional: true },
        { name: "hasPhotos", label: "Photos or Videos Available", type: "text", placeholder: "Yes/No – specify types if any" },
        { name: "reviewCount", label: "Number of Reviews (and Average Rating)", type: "text", placeholder: "e.g., 18 reviews – 4.2 stars" }
      ],
      prompt: ({ companyName, businessAddress, phoneNumber, website, businessType, service1, service2, service3, businessHours, serviceArea, targetAudience, currentGBP, competitor, hasPhotos, reviewCount }) =>
        `Create a detailed optimisation plan for the Google Business Profile (GBP) of the following company to improve local search visibility, engagement, and lead generation:\n\nCompany: ${companyName}\nAddress: ${businessAddress}\nPhone: ${phoneNumber}\nWebsite: ${website}\nBusiness Type: ${businessType}\nMain Services/Products: ${service1}, ${service2}, ${service3}\nBusiness Hours: ${businessHours}\nService Area: ${serviceArea}\nTarget Audience: ${targetAudience}\nCurrent GBP Status: ${currentGBP}${competitor ? `\nCompetitor Example: ${competitor}` : ""}\nPhotos/Videos Available: ${hasPhotos}\nReviews: ${reviewCount}\n\nGenerate a step-by-step Google Business Profile Optimisation Plan that includes:\n1. Profile Completion Checklist (Categories, Description, Services, Products, etc.)\n2. Keyword Suggestions for Business Description & Services\n3. Photo/Video Upload Strategy (What to add, how often, formatting tips)\n4. Google Post Strategy (Types of posts, frequency, content tips)\n5. Review Strategy (How to ask for reviews, suggested email/message templates)\n6. Review Response Strategy (Tone, keywords, best practices)\n7. Q&A Section Management (Suggested FAQs to pre-fill)\n8. Local SEO Tips for GBP Ranking Boost\n9. Competitor Comparison & Positioning Suggestions\n10. Ongoing Monthly Maintenance Plan\n\nStructure the response into actionable sections, use clear headings, and include examples where possible. The tone should be professional and tailored for a small to medium-sized local business.`
    },

    "Competitor Analysis": {
      description: "Know thy enemy. Spy on your rivals (ethically), find their weaknesses, and sharpen your competitive edge.",
      inputs: [
        { name: "companyName", label: "Your Company Name", type: "text" },
        { name: "website", label: "Your Website URL", type: "text" },
        { name: "businessType", label: "Your Business Type / Industry", type: "text", placeholder: "e.g., Fire Risk Assessments, Plumbing, Legal Services" },
        { name: "targetMarket", label: "Target Market or Area", type: "text", placeholder: "e.g., Ilford, Greater London, Nationwide" },
        { name: "service1", label: "Core Service/Product 1", type: "text" },
        { name: "service2", label: "Core Service/Product 2", type: "text" },
        { name: "service3", label: "Core Service/Product 3", type: "text" },
        { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Residential Landlords, SMEs, Property Managers" },
        { name: "competitor1Name", label: "Competitor 1 Name", type: "text" },
        { name: "competitor1Website", label: "Competitor 1 Website", type: "text" },
        { name: "competitor2Name", label: "Competitor 2 Name", type: "text" },
        { name: "competitor2Website", label: "Competitor 2 Website", type: "text" },
        { name: "competitor3Name", label: "Competitor 3 Name (optional)", type: "text", optional: true },
        { name: "competitor3Website", label: "Competitor 3 Website (optional)", type: "text", optional: true },
        { name: "competitor4Name", label: "Competitor 4 Name (optional)", type: "text", optional: true },
        { name: "competitor4Website", label: "Competitor 4 Website (optional)", type: "text", optional: true },
        { name: "learningGoals", label: "What You Want to Learn", type: "text", placeholder: "e.g., Pricing strategy, Marketing activity, Reputation gaps, SEO performance" }
      ],
      prompt: ({ companyName, website, businessType, targetMarket, service1, service2, service3, targetAudience, competitor1Name, competitor1Website, competitor2Name, competitor2Website, competitor3Name, competitor3Website, competitor4Name, competitor4Website, learningGoals }) => {
        let competitorsText = `Competitor 1: ${competitor1Name} (${competitor1Website})\nCompetitor 2: ${competitor2Name} (${competitor2Website})`;
        if (competitor3Name && competitor3Website) {
          competitorsText += `\nCompetitor 3: ${competitor3Name} (${competitor3Website})`;
        }
        if (competitor4Name && competitor4Website) {
          competitorsText += `\nCompetitor 4: ${competitor4Name} (${competitor4Website})`;
        }
        
        return `Conduct a comprehensive competitor analysis for the following business, including comparison across online visibility, services, reputation, and marketing strategy:\n\nYour Company: ${companyName}\nYour Website: ${website}\nBusiness Type: ${businessType}\nTarget Market: ${targetMarket}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Audience: ${targetAudience}\nMain Competitors:\n${competitorsText}\nLearning Goals: ${learningGoals}\n\nGenerate a Competitor Analysis Report that includes:\n1. Company Overview Comparison (Years active, size, areas covered)\n2. Service Offering Comparison (Breadth, depth, positioning)\n3. Website Performance & SEO (Speed, mobile friendliness, keyword ranking estimates)\n4. Google Business Profile Comparison (Reviews, activity, completeness)\n5. Social Media Presence & Activity (Platforms used, post frequency, engagement levels)\n6. Online Reputation Summary (Star ratings, review counts, sentiment trends)\n7. Pricing Transparency & Positioning (If pricing info is available)\n8. Strengths & Weaknesses of Each Competitor\n9. Opportunities for Differentiation\n10. Strategic Recommendations for Your Business\n\nStructure the report using clear headings and bullet points. Keep the tone analytical but actionable, aimed at helping a business refine its marketing and service strategy based on the local competition.`;
      }
    },
    "Local Lead Gen": {
  description: "Get the phone ringing. Turn nearby searches into real leads — with local strategies that actually work.",
  inputs: [
    { name: "companyName", label: "Company Name", type: "text" },
    { name: "businessAddress", label: "Business Address", type: "text" },
    { name: "website", label: "Website URL", type: "text" },
    { name: "phoneNumber", label: "Phone Number", type: "text" },
    { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Fire Safety Consultancy, Cleaning Services, Electrician" },
    { name: "service1", label: "Core Service/Product 1", type: "text" },
    { name: "service2", label: "Core Service/Product 2", type: "text" },
    { name: "service3", label: "Core Service/Product 3", type: "text" },
    { name: "targetArea", label: "Target Area / Catchment", type: "text", placeholder: "e.g., Within 15 miles of Croydon, Central London, Essex" },
    { name: "targetAudience", label: "Target Audience", type: "text", placeholder: "e.g., Homeowners, Commercial Landlords, SMEs" },
    { name: "marketingChannels", label: "Current Marketing Channels in Use", type: "text", placeholder: "e.g., Google Ads, Facebook Ads, Google Business Profile, Website SEO" },
    { name: "monthlyBudget", label: "Monthly Marketing Budget", type: "text", placeholder: "e.g., £500/month, Not set, Up to £2K" },
    { name: "leadHandlingProcess", label: "Lead Handling Process", type: "text", placeholder: "e.g., Direct calls, Contact form, WhatsApp, CRM use" },
    { name: "businessGoals", label: "Business Goals", type: "text", placeholder: "e.g., 10 new client leads per week, 25% increase in local calls, grow mailing list" }
  ],
  prompt: ({ companyName, businessAddress, website, phoneNumber, businessType, service1, service2, service3, targetArea, targetAudience, marketingChannels, monthlyBudget, leadHandlingProcess, businessGoals }) => {
    return `Create a comprehensive local lead generation strategy for the following business to increase inbound enquiries, bookings, or calls from the local area:\n\nCompany Name: ${companyName}\nBusiness Address: ${businessAddress}\nWebsite URL: ${website}\nPhone Number: ${phoneNumber}\nBusiness Type: ${businessType}\nCore Services/Products: ${service1}, ${service2}, ${service3}\nTarget Area / Catchment: ${targetArea}\nTarget Audience: ${targetAudience}\nCurrent Marketing Channels in Use: ${marketingChannels}\nMonthly Marketing Budget: ${monthlyBudget}\nLead Handling Process: ${leadHandlingProcess}\nBusiness Goals: ${businessGoals}\n\nGenerate a Local Lead Generation Strategy that includes:\n1. Lead Source Audit (Where leads are likely to come from or being lost)\n2. Local SEO Optimisation Tips (including GBP, citations, keyword strategy)\n3. Google Ads Setup Recommendations (Targeting, ad types, local extensions)\n4. Facebook/Instagram Ad Suggestions (Creative angles, audience targeting)\n5. Lead Magnet Ideas (Free guides, checklists, audits, discounts)\n6. Conversion Optimisation for Website & Contact Points\n7. Referral and Review-Based Lead Boosting Techniques\n8. Local PR and Partnership Ideas for Exposure\n9. CRM / Lead Tracking Suggestions (If applicable)\n10. 30-Day Action Plan to Increase Local Leads\n\nStructure the response with clear headings, bullet points, and a prioritised plan of action. Make the output suitable for a local service business aiming to increase visibility and convert interest into enquiries.`;
  }
},
"Estimating & Job Quoter": {
  description: "Quote it like a pro. Make pricing simple, sharp, and stress-free with clean, client-ready job quotes in seconds.",
  inputs: [
    { name: "companyName", label: "Company Name", type: "text" },
    { name: "businessAddress", label: "Business Address", type: "text" },
    { name: "website", label: "Website URL", type: "text" },
    { name: "contactInfo", label: "Phone / Email Contact", type: "text" },
    { name: "businessType", label: "Business Type / Industry", type: "text", placeholder: "e.g., Fire Risk Assessments, Landscaping, Home Renovations" },
    { name: "service1", label: "Main Service Offered 1", type: "text" },
    { name: "service2", label: "Main Service Offered 2", type: "text" },
    { name: "service3", label: "Main Service Offered 3", type: "text" },
    { name: "serviceArea", label: "Service Area / Region Covered", type: "text", placeholder: "e.g., Greater London, East Midlands, UK-wide" },
    { name: "clientTypes", label: "Client Types", type: "text", placeholder: "e.g., Residential, Commercial, Landlords, Public Sector" },
    { name: "projectSizes", label: "Typical Project Sizes or Ranges", type: "text", placeholder: "e.g., £200–£2,000, or £3K+ full jobs" },
    { name: "quotingMethod", label: "Current Method for Quoting", type: "text", placeholder: "e.g., Manual Excel sheet, Email replies, Verbal estimates" },
    { name: "quotingChallenges", label: "Quoting Challenges Faced", type: "text", placeholder: "e.g., Inconsistent pricing, Delayed replies, Low conversion rate" },
    { name: "desiredOutcome", label: "Desired Outcome", type: "text", placeholder: "e.g., Faster quoting, More accepted quotes, Better margin control" }
  ],
  prompt: ({ companyName, businessAddress, website, contactInfo, businessType, service1, service2, service3, serviceArea, clientTypes, projectSizes, quotingMethod, quotingChallenges, desiredOutcome }) => {
    return `Create a tailored estimating and job quoting system for the following service-based business to improve consistency, professionalism, and conversion rates for incoming enquiries:\n\nCompany Name: ${companyName}\nBusiness Address: ${businessAddress}\nWebsite URL: ${website}\nPhone / Email Contact: ${contactInfo}\nBusiness Type: ${businessType}\nMain Services Offered: ${service1}, ${service2}, ${service3}\nService Area / Region Covered: ${serviceArea}\nClient Types: ${clientTypes}\nTypical Project Sizes or Ranges: ${projectSizes}\nCurrent Method for Quoting: ${quotingMethod}\nQuoting Challenges Faced: ${quotingChallenges}\nDesired Outcome: ${desiredOutcome}\n\nGenerate a professional Estimating & Job Quoting System that includes:\n1. Quote Structure Template (What sections every quote should include)\n2. Suggested Tools or Platforms for Quote Generation (e.g., Google Sheets, Jobber, Quotient)\n3. Pre-set Price Guide Examples (if relevant to industry)\n4. Variables to Consider When Estimating (e.g., labour, travel, materials, urgency)\n5. Upsell Opportunities and Optional Add-ons\n6. Follow-up Process After Sending a Quote (Templates and timing)\n7. Mobile or On-Site Quoting Tips (if applicable)\n8. Terms & Conditions / Payment Terms Recommendations\n9. Branding Tips for Quotes (Professional design, logo, company details)\n10. Quote-to-Job Conversion Boosters (e.g., instant booking links, testimonials, guarantee badges)\n\nPresent the output with clear sections, practical tools, and step-by-step tips — suitable for improving both speed and professionalism in quoting jobs for a local service business.`;
  }
}
    
}
};
