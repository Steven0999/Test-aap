// --- Data Definitions ---
// Quiz Data (Trauma Exam)
const exams = [{ // Corrected: Removed extra closing bracket here
  id: "trauma",
  title: "Trauma",
  questions: [
    { question: "What is the definition of 'Trauma'?", options: ["Any injury caused by a fall", "Acute physiological/structural change from external energy", "Minor injury", "Psychological distress"], correctAnswerIndex: 1 },
    { question: "How is 'Major Trauma' defined?", options: ["Minor injury", "Life-threatening but not life-changing", "Life-threatening and possibly life-changing", "RTC injury"], correctAnswerIndex: 2 },
    { question: "What is MOI concerned with?", options: ["Medical history", "Transfer of energy", "Time since injury", "Emotional impact"], correctAnswerIndex: 1 },
    { question: "What is the definition of 'Trauma' according to the provided materials?", options: ["Any injury caused by a fall from height.", "The acute physiological and structural change that occurs in a patient’s body when an external source of energy transfers to the body faster than the body’s ability to sustain and dissipate it.", "A minor injury that does not requires hospital admission.", "A psychological response to a distressing event."], correctAnswerIndex: 1 },
    { question: "How is 'Major Trauma' defined?", options: ["An injury requiring only basic first aid.", "An injury that is life-threatening but not life-changing.", "An injury or combination of injuries that are life-threatening and could be life changing because it may result in long-term disability.", "Any injury sustained in a road traffic collision."], correctAnswerIndex: 2 },
    { question: "Which of the following is NOT listed as a leading cause of trauma in the provided documents?", options: ["Road Traffic Collisions (RTC)", "Falls in people over the age of 75", "Work-related accidents", "Sports injuries in children"], correctAnswerIndex: 3 },
    { question: "What is the primary concern of 'Mechanism of Injury (MOI)'?", options: ["The patient's medical history.", "The sum of all physical forces that result in the patient's injury, primarily concerned with the transfer of energy.", "The time elapsed since the injury occurred.", "The emotional impact of the injury on the patient."], correctAnswerIndex: 1 },
    { question: "Which term is defined as 'the study of the relationship between motion and its forces'?", options: ["Thermodynamics", "Kinetics", "Statics", "Dynamics"], correctAnswerIndex: 1 },
    { question: "What is 'Energy Transfer' in the context of trauma?", options: ["The conversion of potential energy to kinetic energy.", "The process by which energy is relocated from one system to another, for example, through the transfer of heat, work or mass transfer.", "The amount of energy an object possesses due to its motion.", "The rate at which energy is consumed by the body."], correctAnswerIndex: 1 },
    { question: "Why is considering the Mechanism of Injury (MOI) important in trauma patients?", options: ["It helps determine the patient's insurance coverage.", "It provides an idea of the extent of injury, may indicate internal injuries, assists in determining appropriate destination, and allows for immobilisation decisions.", "It is only relevant for penetrating trauma.", "It solely dictates the type of pain relief to be administered."], correctAnswerIndex: 1 },
    { question: "What is 'Blunt Trauma'?", options: ["An injury caused by a sharp object piercing the skin.", "An injury resulting from a fall from a low height.", "A usually serious injury caused by a blunt object or collision with a blunt surface.", "An injury that only affects soft tissues without breaking the skin."], correctAnswerIndex: 2 },
    { question: "Which of the following is an example of 'Penetrating Trauma'?", options: ["A concussion from a fall.", "A broken arm from a sports injury.", "A gunshot wound.", "A bruise from bumping into furniture."], correctAnswerIndex: 2 },
    { question: "What is the primary purpose of an inclusive trauma system?", options: ["To reduce the cost of trauma care.", "To ensure patients are taken to the most suitable hospital to appropriately manage their injuries.", "To centralize all trauma care in one location.", "To provide only basic life support at the scene."], correctAnswerIndex: 1 },
    { question: "Which of the following is a category of hospital within a trauma network?", options: ["Local Emergency Hospitals", "Community Clinics", "General Practitioner Surgeries", "Rehabilitation Centers"], correctAnswerIndex: 0 },
    { question: "Why is 'Multi-disciplinary working' essential in trauma management?", options: ["It is a legal requirement for all incidents.", "It allows for sharing of resources and expertise, scene management, public management, safety, and good communication to provide optimal patient care.", "It speeds up the patient handover process.", "It reduces the need for advanced clinical interventions."], correctAnswerIndex: 1 },
    { question: "What does the 'S' in the SCENE mnemonic for scene assessment stand for?", options: ["Survey", "Safety", "Severity", "Situation"], correctAnswerIndex: 1 },
    { question: "During the primary survey, what is the main goal?", options: ["To gather a detailed patient history.", "To identify and address immediate threats to life.", "To perform a head-to-toe examination.", "To determine the patient's long-term prognosis."], correctAnswerIndex: 1 },
    { question: "Which of the following is the first step in the CA<C>BCDE approach to primary survey?", options: ["Airway", "Breathing", "Catastrophic Haemorrhage", "Circulation"], correctAnswerIndex: 2 },
    { question: "What is the most rapid cause of death in trauma?", options: ["Airway obstruction", "Tension Pneumothorax", "Catastrophic Haemorrhage", "Traumatic Brain Injury"], correctAnswerIndex: 2 },
    { question: "When managing the airway in a trauma patient with suspected C-spine injury, what maneuver should be used?", options: ["Head tilt-chin lift", "Jaw thrust", "Oropharyngeal airway insertion", "Nasopharyngeal airway insertion"], correctAnswerIndex: 1 },
    { question: "What does the 'B' in CA<C>BCDE stand for in the primary survey?", options: ["Body temperature", "Blood pressure", "Breathing", "Bowel sounds"], correctAnswerIndex: 2 },
    { question: "Which of the following is NOT a site where significant internal hemorrhage ('blood on the floor plus 4 more') can occur?", options: ["Thoracic cavity", "Abdominal cavity", "Pelvic fractures", "Minor superficial lacerations"], correctAnswerIndex: 3 },
    { question: "What is the 'Lethal Triad of Trauma'?", options: ["Hypoxia, Hypotension, Acidosis", "Coagulopathy, Hypothermia, Acidosis", "Tachycardia, Tachypnea, Hypertension", "Pain, Infection, Disability"], correctAnswerIndex: 1 },
    { question: "When should the secondary survey commence?", options: ["Immediately upon patient contact.", "Only after all life-threatening injuries identified in the primary survey have been addressed.", "After transferring the patient to the hospital.", "Before initiating any treatment."], correctAnswerIndex: 1 },
    { question: "What mnemonic is used for the head-to-toe assessment in the secondary survey?", options: ["ABCDE", "SAMPLE", "DCAP-BTLS", "ATMIST"], correctAnswerIndex: 2 },
    { question: "What does the 'M' in the ATMIST handover tool stand for?", options: ["Medications", "Mechanism of injury", "Management", "Monitoring"], correctAnswerIndex: 1 },
    { question: "What is the definition of 'Bleeding'?", options: ["The escape of blood from the closed cardiovascular system.", "Any visible blood on the patient's clothing.", "A minor cut that requires a bandage.", "The process of blood clotting."], correctAnswerIndex: 0 },
    { question: "What is 'Catastrophic Haemorrhage'?", options: ["Minor bleeding that stops on its own.", "Bleeding that is likely to cause death in minutes.", "Any internal bleeding.", "Bleeding that requires a simple dressing."], correctAnswerIndex: 1 },
    { question: "Which type of bleeding is characterized by bright red blood spurting from the wound?", options: ["Venous bleeding", "Capillary bleeding", "Arterial bleeding", "Internal bleeding"], correctAnswerIndex: 2 },
    { question: "Which layer of the skin is the outermost layer?", options: ["Dermis", "Hypodermis", "Epidermis", "Subcutaneous tissue"], correctAnswerIndex: 2 },
    { question: "What type of wound is characterized by a physical injury to the body consisting of a laceration or breaking of the skin or mucous membrane, often with damage to underlying tissue?", options: ["Contusion", "Abrasion", "Wound", "Incision"], correctAnswerIndex: 2 },
    { question: "A bruise is categorized as which type of wound?", options: ["Laceration", "Puncture", "Contusion", "Incision"], correctAnswerIndex: 2 },
    { question: "What is a fracture found commonly in paediatrics under 10 years old?", options: ["Young partial fracture.", "Paediatric complex fracture", "Greenstick fracture.", "Bluetwig fracture."], correctAnswerIndex: 2 },
    { question: "Which stage of wound healing involves the formation of a blood clot?", options: ["Inflammatory", "Proliferative", "Bleeding", "Remodeling"], correctAnswerIndex: 2 },
    { question: "Which of the following is an INTERNAL factor that can influence wound formation?", options: ["Temperature extremes", "Microorganisms", "Diabetes", "Repeated trauma"], correctAnswerIndex: 2 },
    { question: "Which of the following is an EXTERNAL factor that can influence wound formation?", options: ["Age", "Smoking", "Microorganisms", "Medication"], correctAnswerIndex: 2 },
    { question: "Which advanced clinical intervention is specifically mentioned for bleeding and wound management?", options: ["Oral antibiotics only", "Tranexamic Acid (TXA)", "Cough suppressants", "Antihistamines"], correctAnswerIndex: 1 },
    { question: "What is a key characteristic of bleeding from long bone fractures?", options: ["It is usually minimal and self-limiting.", "It can be very significant (up to 2000ml).", "It only occurs if the skin is broken.", "It is easily controlled with simple direct pressure."], correctAnswerIndex: 1 },
    { question: "What is the correct placement for a pelvic binder?", options: ["Around the waist.", "Over the greater trochanter.", "Below the knees.", "Around the chest."], correctAnswerIndex: 1 },
    { question: "What is 'Permissive Hypotension' in trauma management, and when is it generally NOT allowed?", options: ["Allowing blood pressure to be high; always allowed.", "Allowing blood pressure to be low; not allowed in isolated head injuries.", "Allowing blood pressure to be low; always allowed.", "Allowing blood pressure to be high; not allowed in chest trauma."], correctAnswerIndex: 1 },
    { question: "What is the aim for maintaining consciousness and radial pulse in a trauma patient with bleeding?", options: ["To avoid fluid administration.", "To indicate the patient is not in pain.", "To ensure organ perfusion is maintained.", "To prepare for immediate surgery."], correctAnswerIndex: 2 },
    { question: "What is the primary function of a traction splint for a femur fracture?", options: ["To completely stop all bleeding.", "To immobilize the joint above and below the fracture.", "To reduce the fracture and control associated bleeding.", "To provide a rigid cast for transport."], correctAnswerIndex: 2 },
    { question: "Which of the following is a potential complication of bleeding and wounds?", options: ["Improved circulation", "Fat embolism", "Enhanced wound healing", "Increased body temperature"], correctAnswerIndex: 1 },
    { question: "What is 'Secondary Intention' wound healing?", options: ["Wound edges are surgically closed.", "New tissue formation from the base upwards, with the wound left open to heal by itself.", "Healing that involves skin grafting.", "Healing that occurs without any scarring."], correctAnswerIndex: 1 },
    { question: "Why should patients with significant trauma be kept warm?", options: ["To make them more comfortable.", "To prevent shivering.", "Because hypothermia can impair the body's ability to clot.", "To speed up their metabolism."], correctAnswerIndex: 2 },
    { question: "What type of wound is a 'scrape' or 'graze'?", options: ["Laceration", "Incision", "Abrasion", "Puncture"], correctAnswerIndex: 2 },
    { question: "What is the definition of 'Thermal Injury'?", options: ["Injury caused by exposure to cold only.", "Injury caused by chemical substances.", "Injury that occurs when energy is transferred from a heat source to the body, causing an increase in the temperature of local tissue.", "Any injury resulting in a blister."], correctAnswerIndex: 2 },
    { question: "Which of the following is NOT a type of thermal injury mentioned?", options: ["Chemical burns", "Electrical burns", "Friction burns", "Radiation poisoning"], correctAnswerIndex: 3 },
    { question: "In the pathophysiology of burns, which zone is where the most damage has occurred and tissue death (necrosis) is present?", options: ["Zone of Hyperaemia", "Zone of Stasis", "Zone of Coagulation", "Zone of Regeneration"], correctAnswerIndex: 2 },
    { question: "Which zone in a burn is damaged but can be significantly impacted by proper care?", options: ["Zone of Coagulation", "Zone of Stasis", "Zone of Hyperaemia", "Zone of Necrosis"], correctAnswerIndex: 1 },
    { question: "What happens to capillary permeability in a significant burn injury?", options: ["It decreases.", "It remains unchanged.", "It increases.", "It becomes selective."], correctAnswerIndex: 2 },
    { question: "Which method is considered 'best for children' when assessing burn size?", options: ["Rule of Nines", "Lund & Browder chart", "The patient's palm method", "Estimating by visual inspection only"], correctAnswerIndex: 1 },
    { question: "What percentage of a patient's Total Body Surface Area (TBSA) is approximately represented by their palm (including fingers)?", options: ["0.5%", "1%", "5%", "10%"], correctAnswerIndex: 1 },
    { question: "A Superficial (1st degree) burn involves which layer(s) of the skin?", options: ["Dermis and Hypodermis", "Only the Epidermis", "Epidermis and Dermis", "All layers including subcutaneous tissue"], correctAnswerIndex: 1 },
    { question: "Which burn classification is characterized by redness with clear blisters?", options: ["Superficial (1st degree)", "Superficial partial thickness (2nd degree)", "Deep dermal", "Full thickness"], correctAnswerIndex: 1 },
    { question: "A Full Thickness burn is characterized by which of the following signs?", options: ["Redness and pain only.", "Clear blisters and extreme pain.", "Stiff, white and brown appearance, often painless.", "Redness with bloody blisters."], correctAnswerIndex: 2 },
    { question: "According to referral criteria, what percentage of TBSAB in children requires referral to a local burn service?", options: ["Any burn", ">1%", ">2%", ">5%"], correctAnswerIndex: 2 },
    { question: "Which type of burn, regardless of size, requires referral to a local burn service?", options: ["Superficial burns", "All deep dermal and full thickness burns", "Small sunburns", "Minor friction burns"], correctAnswerIndex: 1 },
    { question: "What is the recommended duration for cooling a thermal burn with tepid running water?", options: ["5 minutes", "10 minutes", "20 minutes", "30 minutes"], correctAnswerIndex: 2 },
    { question: "Why should ice NOT be used for cooling burns?", options: ["It is not effective.", "It can cause hypothermia and further tissue damage.", "It makes the burn more painful.", "It delays transport to hospital."], correctAnswerIndex: 1 },
    { question: "What is the recommended material for covering a burn after cooling?", options: ["Cotton wool", "Adhesive plaster", "Cling film (transparent, non-adherent)", "Thick blankets"], correctAnswerIndex: 2 },
    { question: "When give high-flow O₂ in burns?", options: ["If inhalation injury suspected.", "Only for minor burns.", "After all other treatments.", "Never."], correctAnswerIndex: 0 },
    { question: "Inhalation injury signs?", options: ["Soot in mouth/nose, singed nasal hairs, hoarseness, stridor, burns around face/neck.", "Only external burns on face.", "Clear lungs on auscultation.", "Normal voice."], correctAnswerIndex: 0 },
    { question: "Best indicator of airway burn severity?", options: ["Progressive hoarseness/stridor.", "Visible soot.", "Normal breathing rate.", "Absence of coughing."], correctAnswerIndex: 0 },
    { question: "Carbon monoxide poisoning suspect when?", options: ["Patient from enclosed fire with headache, confusion, cherry-red skin.", "Patient from open fire with no symptoms.", "Patient with only burns.", "Patient with normal vital signs."], correctAnswerIndex: 0 },
    { question: "What does COHb do?", options: ["Increases oxygen delivery.", "Binds Hb stronger than O₂ → hypoxia.", "Helps with oxygen transport.", "Eliminates carbon dioxide."], correctAnswerIndex: 1 },
    { question: "Management priority CO poisoning?", options: ["High-flow O₂ (100%) non-rebreather mask.", "Low-flow oxygen.", "Monitoring only.", "Pain relief."], correctAnswerIndex: 0 },
    { question: "Electrical burn danger?", options: ["Only superficial burns.", "Deep tissue damage, arrhythmias.", "No internal damage.", "Only minor skin discoloration."], correctAnswerIndex: 1 },
    { question: "Management electrical injury?", options: ["Scene safety (switch off power), ECG monitoring, treat burns as thermal.", "Ignore scene safety.", "Apply ice packs.", "Only treat external burns."], correctAnswerIndex: 0 },
    { question: "Chemical burn initial management?", options: ["Neutralize with opposite chemical.", "Brush off dry chemical, irrigate copiously with water.", "Cover with a dressing immediately.", "Wait for specialist advice."], correctAnswerIndex: 1 },
    { question: "Why not neutralise acid/alkali burns?", options: ["It is not effective.", "Causes exothermic reaction and worsens injury.", "It makes the burn more painful.", "It delays transport."], correctAnswerIndex: 1 },
    { question: "Primary blast injury affects?", options: ["Only skin.", "Air-filled organs (ears, lungs, GI tract).", "Bones and joints.", "Brain only."], correctAnswerIndex: 1 },
    { question: "Secondary blast injury caused by?", options: ["Patient being thrown.", "Flying debris/shrapnel.", "Blast wave.", "Burns."], correctAnswerIndex: 1 },
    { question: "Tertiary blast injury caused by?", options: ["Burns.", "Patient being thrown (blunt trauma).", "Flying debris.", "Toxic exposure."], correctAnswerIndex: 1 },
    { question: "Quaternary blast injury?", options: ["Direct blast wave injuries.", "Burns, crush, inhalation, toxic exposure.", "Secondary projectile injuries.", "Being thrown by blast wind."], correctAnswerIndex: 1 },
    { question: "Crush syndrome definition?", options: ["Minor bruising.", "Systemic effects of muscle crush releasing toxins (myoglobin, K+).", "Fracture of a bone.", "Nerve damage only."], correctAnswerIndex: 1 },
    { question: "Main electrolyte disturbance crush syndrome?", options: ["Hypokalaemia.", "Hypernatraemia.", "Hyperkalaemia.", "Hypocalcaemia."], correctAnswerIndex: 2 },
    { question: "First sign of compartment syndrome?", options: ["Swelling.", "Pain out of proportion to injury.", "Numbness.", "Weakness."], correctAnswerIndex: 1 },
    { question: "5 Ps of compartment syndrome?", options: ["Pain, Pallor, Pulselessness, Paraesthesia, Paralysis.", "Pain, Pustules", "Purple", "Puffiness", "Pressure."], correctAnswerIndex: 0 },
    { question: "Spinal shock definition?", options: ["Permanent paralysis.", "Temporary loss of function/reflexes below injury (flaccid, areflexia).", "Psychological response to spinal injury.", "Only sensory loss."], correctAnswerIndex: 1 },
    { question: "Neurogenic shock cause?", options: ["Blood loss.", "Loss of sympathetic tone (SCI above T6).", "Heart failure.", "Infection."], correctAnswerIndex: 1 },
    { question: "Neurogenic shock signs?", options: ["Hypotension, tachycardia", "cold clammy skin.", "Hypotension", "bradycardia", "warm dry skin below injury."], correctAnswerIndex: 1 },
    { question: "Flail chest definition?", options: ["Single rib fracture.", "Fracture of sternum.", "≥2 adjacent ribs fractured in ≥2 places creating a free segment.", "Rib fracture with no displacement."], correctAnswerIndex: 2 },
    { question: "Flail chest main danger?", options: ["Minor discomfort.", "Paradoxical movement impairs ventilation.", "Bleeding only.", "Infection."], correctAnswerIndex: 1 },
    { question: "Open pneumothorax initial management?", options: ["Airtight dressing.", "3-sided occlusive dressing.", "Direct pressure.", "Chest compressions."], correctAnswerIndex: 1 },
    { question: "Tension pneumothorax signs?", options: ["Mild discomfort.", "Severe resp distress, tracheal deviation, absent breath sounds one side, hypotension.", "Normal breathing.", "Tachycardia only."], correctAnswerIndex: 1 },
    { question: "Needle decompression site?", options: ["Anywhere on the chest.", "2nd ICS midclavicular or 5th ICS mid-axillary (14g cannula).", "Abdomen.", "Leg."], correctAnswerIndex: 1 },
    { question: "Massive haemothorax definition?", options: ["Small amount of blood in chest.", ">1500ml blood in pleural space.", "Blood in abdomen.", "Blood in airway."], correctAnswerIndex: 1 },
    { question: "Beck’s triad (tamponade)?", options: ["Hypotension, muffled heart sounds, JVP distension.", "Hypertension, clear heart sounds, no JVP.", "Tachycardia, chest pain, normal ECG.", "Fever, cough, shortness of breath."], correctAnswerIndex: 0 },
    { question: "Pelvic fracture initial management?", options: ["Leg splint.", "Pelvic binder (over greater trochanters).", "Arm sling.", "Only pain relief."], correctAnswerIndex: 1 },
    { question: "FAST scan used for?", options: ["Detect fractures.", "Detect free fluid (bleeding) in abdomen.", "Assess lung function.", "Check heart rate."], correctAnswerIndex: 1 },
    { question: "Golden Hour trauma?", options: ["First 60 minutes where rapid intervention improves survival.", "Any hour of treatment.", "First 24 hours.", "Only for minor injuries."], correctAnswerIndex: 0 }
  ]
}];

// General Flashcards Data
const generalFlashcards = [
  { q: "What is trauma?", a: "Physiological/structural change from energy transfer." },
  { q: "Major trauma definition?", a: "Life-threatening or life-changing injury." },
  { q: "MOI stands for?", a: "Mechanism of Injury." }
];

// Trauma Flashcards Data (Full Set)
const traumaFlashcards = [ // Corrected: Removed extra closing bracket here
  { q: "What is the definition of 'Trauma'?", a: "Acute physiological/structural change when external energy > body’s ability to cope." },
  { q: "How is 'Major Trauma' defined?", a: "Life-threatening and could be life-changing with long-term disability." },
  { q: "Leading causes of trauma?", a: "RTCs, falls in >75s, work-related accidents. NOT sports injuries in children." },
  { q: "What is MOI concerned with?", a: "Sum of all physical forces and transfer of energy causing injury." },
  { q: "Term for 'study of relationship between motion and forces'?", a: "Kinetics." },
  { q: "What is 'Energy Transfer'?", a: "Energy relocated from one system to another (heat, work, mass transfer)." },
  { q: "Why is MOI important?", a: "Helps predict extent/internal injuries, destination, immobilisation." },
  { q: "What is Blunt Trauma?", a: "Usually serious injury caused by blunt object/surface (e.g. RTC, fall)." },
  { q: "Example of Penetrating Trauma?", a: "Gunshot wound." },
  { q: "Primary purpose of inclusive trauma system?", a: "Ensure patients go to most suitable hospital for injuries." },
  { q: "Trauma network hospital category?", a: "Local Emergency Hospitals (plus MTCs & Trauma Units)." },
  { q: "Why multi-disciplinary working?", a: "Share resources, manage scene, safety, comms, optimal care." },
  { q: "What does 'S' in SCENE stand for?", a: "Safety (dynamic risk assessment, PPE)." },
  { q: "Primary survey goal?", a: "Identify & address immediate threats to life." },
  { q: "First step in CA<C>BCDE?", a: "Catastrophic Haemorrhage." },
  { q: "Most rapid cause of death in trauma?", a: "Catastrophic Haemorrhage." },
  { q: "Airway maneuver in suspected C-spine?", a: "Jaw thrust." },
  { q: "'B' in CA<C>BCDE?", a: "Breathing." },
  { q: "Not part of 'blood on floor +4 more'?", a: "Minor superficial lacerations." },
  { q: "Lethal Triad of Trauma?", a: "Coagulopathy, Hypothermia, Acidosis." },
  { q: "When start secondary survey?", a: "After life-threatening issues in primary survey addressed." },
  { q: "Head-to-toe mnemonic?", a: "DCAP-BTLS." },
  { q: "'M' in ATMIST?", a: "Mechanism of injury." },
  { q: "Definition of 'Bleeding'?", a: "Escape of blood from closed cardiovascular system." },
  { q: "Catastrophic Haemorrhage?", a: "Bleeding likely to cause death in minutes." },
  { q: "Arterial bleeding look?", a: "Bright red, spurting." },
  { q: "Outermost skin layer?", a: "Epidermis." },
  { q: "Definition of 'Wound'?", a: "Laceration/break in skin or mucous membrane with tissue damage." },
  { q: "Bruise type of wound?", a: "Contusion." },
  { q: "Common fracture <10yrs?", a: "Greenstick fracture." },
  { q: "Stage of healing with clot?", a: "Bleeding phase." },
  { q: "Internal factor in wound formation?", a: "Diabetes." },
  { q: "External factor in wound formation?", a: "Microorganisms." },
  { q: "Advanced intervention bleeding/wounds?", a: "Tranexamic Acid (TXA)." },
  { q: "Long bone fracture bleeding?", a: "Up to 2000ml." },
  { q: "Pelvic binder placement?", a: "Over greater trochanter." },
  { q: "Permissive Hypotension not allowed when?", a: "Isolated head injuries." },
  { q: "Why maintain consciousness & radial pulse?", a: "Ensure organ perfusion." },
  { q: "Function of traction splint femur?", a: "Reduce fracture + control bleeding." },
  { q: "Complication of bleeding/wounds?", a: "Fat embolism." },
  { q: "Secondary Intention healing?", a: "Wound left open, tissue grows from base." },
  { q: "Why keep trauma pts warm?", a: "Prevent hypothermia impairing clotting." },
  { q: "Scrape/graze wound type?", a: "Abrasion." },
  { q: "Definition of 'Thermal Injury'?", a: "Energy transferred from heat source causing tissue damage." },
  { q: "Not type of thermal injury?", a: "Radiation poisoning." },
  { q: "Burn zone with necrosis?", a: "Zone of Coagulation." },
  { q: "Burn zone care-dependent outcome?", a: "Zone of Stasis." },
  { q: "Burn capillary permeability?", a: "Increases." },
  { q: "Best for children burn size?", a: "Lund & Browder chart." },
  { q: "Palm (with fingers) = what % TBSA?", a: "≈1%." },
  { q: "Superficial burn layer?", a: "Epidermis only." },
  { q: "Redness + clear blisters burn type?", a: "Superficial partial thickness (2nd degree)." },
  { q: "Deep dermal & Full thickness burn look?", a: "Stiff, white/brown, often painless." },
  { q: "Child burn referral > what % TBSA?", a: ">2%." },
  { q: "Burns always referred?", a: "All deep dermal & full thickness burns." },
  { q: "Cool burn how long?", a: "20 minutes tepid water." },
  { q: "Why not ice burns?", a: "Causes hypothermia & tissue damage." },
  { q: "Material to cover burn?", a: "Cling film (transparent, non-adherent, applied in layers not circumferentially)." },
  { q: "When give high-flow O₂ in burns?", a: "If inhalation injury suspected." },
  { q: "Inhalation injury signs?", a: "Soot in mouth/nose, singed nasal hairs, hoarseness, stridor, burns around face/neck." },
  { q: "Best indicator of airway burn severity?", a: "Progressive hoarseness/stridor." },
  { q: "Carbon monoxide poisoning suspect when?", a: "Patient from enclosed fire with headache, confusion, cherry-red skin." },
  { q: "What does COHb do?", a: "Binds Hb stronger than O₂ → hypoxia." },
  { q: "Management priority CO poisoning?", a: "High-flow O₂ (100%) non-rebreather mask." },
  { q: "Electrical burn danger?", a: "Deep tissue damage, arrhythmias." },
  { q: "Management electrical injury?", a: "Scene safety (switch off power), ECG monitoring, treat burns as thermal." },
  { q: "Chemical burn initial management?", a: "Brush off dry chemical, irrigate copiously with water." },
  { q: "Why not neutralise acid/alkali burns?", a: "Causes exothermic reaction and worsens injury." },
  { q: "Primary blast injury affects?", a: "Air-filled organs (ears, lungs, GI tract)." },
  { q: "Secondary blast injury caused by?", a: "Flying debris/shrapnel." },
  { q: "Tertiary blast injury caused by?", a: "Patient being thrown (blunt trauma)." },
  { q: "Quaternary blast injury?", a: "Burns, crush, inhalation, toxic exposure." },
  { q: "Crush syndrome definition?", a: "Systemic effects of muscle crush releasing toxins (myoglobin, K+)." },
  { q: "Main electrolyte disturbance crush syndrome?", a: "Hyperkalaemia." },
  { q: "First sign of compartment syndrome?", a: "Pain out of proportion to injury." },
  { q: "5 Ps of compartment syndrome?", a: "Pain, Pallor, Pulselessness, Paraesthesia, Paralysis." },
  { q: "Spinal shock definition?", a: "Temporary loss of function/reflexes below injury (flaccid, areflexia)." },
  { q: "Neurogenic shock cause?", a: "Loss of sympathetic tone (SCI above T6)." },
  { q: "Neurogenic shock signs?", a: "Hypotension, bradycardia, warm dry skin below injury." },
  { q: "Flail chest definition?", a: "≥2 adjacent ribs fractured in ≥2 places creating a free free segment.", "Rib fracture with no displacement."], correctAnswerIndex: 2 },
  { q: "Flail chest main danger?", a: "Paradoxical movement impairs ventilation." },
  { q: "Open pneumothorax initial management?", a: "3-sided occlusive dressing." },
  { q: "Tension pneumothorax signs?", a: "Severe resp distress, tracheal deviation, absent breath sounds one side, hypotension." },
  { q: "Needle decompression site?", a: "2nd ICS midclavicular or 5th ICS mid-axillary (14g cannula)." },
  { q: "Massive haemothorax definition?", a: ">1500ml blood in pleural space." },
  { q: "Beck’s triad (tamponade)?", a: "Hypotension, muffled heart sounds, JVP distension." },
  { q: "Pelvic fracture initial management?", a: "Pelvic binder (over greater trochanters)." },
  { q: "FAST scan used for?", a: "Detect free fluid (bleeding) in abdomen." },
  { q: "Golden Hour trauma?", a: "First 60 minutes where rapid intervention improves survival." }
];

// --- Sidebar & Navigation Logic ---
// Get elements after DOM is loaded
let burger, sidebar, overlay;
let navButtons;

function setupNavigation() {
    burger = document.getElementById('burger');
    sidebar = document.getElementById('sidebar');
    overlay = document.getElementById('overlay');
    navButtons = document.querySelectorAll('.nav-btn');

    if (burger) {
        burger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }

    // Helper to show/hide sections
    function showSection(id) {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    }

    // Attach event listeners to navigation buttons
    navButtons.forEach(btn =>
        btn.addEventListener('click', () => {
            showSection(btn.dataset.target);
            // Reset flashcard state when switching sections
            isGeneralCardFlipped = false;
            if (generalFlashcards.length > 0) {
                renderFlashcard(generalFlashcards, generalFlashIndex, 'general-flashcard-container');
            }
            isTraumaCardFlipped = false;
            if (traumaFlashcards.length > 0) {
                renderFlashcard(traumaFlashcards, traumaFlashIndex, 'trauma-flashcard-container');
            }
        })
    );
}


// --- Quiz Logic ---
let currentExam = null;
let currentIndex = 0;
let score = 0;
let selectedOptionIndex = null; // To keep track of the user's selected option

// Get quiz elements after DOM is loaded
let examButtons, quizApp, resultsPage, questionEl, optionsEl, progressBarInner, finalScoreEl;
let backBtn, retakeQuizBtn, returnToContentsBtn;

function setupQuiz() {
    examButtons = document.getElementById('exam-buttons');
    quizApp = document.getElementById('quiz-app');
    resultsPage = document.getElementById('results-page');
    questionEl = document.getElementById('question');
    optionsEl = document.getElementById('options');
    progressBarInner = document.getElementById('progress-bar-inner');
    finalScoreEl = document.getElementById('final-score');
    backBtn = document.getElementById('back-btn');
    retakeQuizBtn = document.getElementById('retake-quiz-btn');
    returnToContentsBtn = document.getElementById('return-to-contents-btn');


    // Dynamically create exam buttons
    exams.forEach((exam) => {
      const b = document.createElement('button');
      b.className = 'btn';
      b.textContent = exam.title;
      b.onclick = () => startExam(exam);
      if (examButtons) {
        examButtons.appendChild(b);
      }
    });

    if (backBtn) backBtn.onclick = () => {
      quizApp.classList.add('hidden');
      document.getElementById('exams-section').classList.remove('hidden');
      if (progressBarInner) progressBarInner.style.width = '0%'; // Reset progress
    };
    if (retakeQuizBtn) retakeQuizBtn.onclick = () => {
      startExam(currentExam); // Restart the current exam
      if (resultsPage) resultsPage.classList.add('hidden');
    };
    if (returnToContentsBtn) returnToContentsBtn.onclick = () => {
      if (resultsPage) resultsPage.classList.add('hidden');
      document.getElementById('exams-section').classList.remove('hidden');
      currentExam = null; // Clear selected exam
      if (progressBarInner) progressBarInner.style.width = '0%'; // Reset progress
    };
}

function startExam(exam) {
  currentExam = exam;
  currentIndex = 0;
  score = 0;
  selectedOptionIndex = null;
  document.getElementById('exams-section').classList.add('hidden');
  if (resultsPage) resultsPage.classList.add('hidden'); // Hide results if coming from there
  if (quizApp) quizApp.classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  if (!currentExam || !questionEl || !optionsEl || !progressBarInner) return;

  const q = currentExam.questions[currentIndex];
  const totalQuestions = currentExam.questions.length;

  questionEl.textContent = `Q${currentIndex + 1}/${totalQuestions}: ${q.question}`;
  optionsEl.innerHTML = ''; // Clear previous options
  selectedOptionIndex = null; // Reset selection for new question

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-button';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });

  // Update progress bar
  progressBarInner.style.width = ((currentIndex) / totalQuestions * 100) + '%';
}

function checkAnswer(indexSelected) {
  if (selectedOptionIndex !== null || !currentExam || !optionsEl) return; // Prevent multiple clicks
  selectedOptionIndex = indexSelected;

  const q = currentExam.questions[currentIndex];
  const buttons = Array.from(optionsEl.querySelectorAll('.option-button'));

  buttons.forEach((b, i) => {
    b.disabled = true; // Disable all buttons after selection
    if (i === q.correctAnswerIndex) {
      b.classList.add('correct');
    } else if (i === indexSelected) {
      b.classList.add('wrong');
    }
  });

  if (indexSelected === q.correctAnswerIndex) {
    score++;
  }

  // Wait a moment before moving to the next question
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentExam.questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1000); // 1-second delay
}

function showResults() {
  if (!quizApp || !resultsPage || !finalScoreEl || !progressBarInner) return;

  quizApp.classList.add('hidden');
  resultsPage.classList.remove('hidden');
  finalScoreEl.textContent = `You scored ${score} / ${currentExam.questions.length}!`;
  progressBarInner.style.width = '100%'; // Complete progress bar
}


// --- Flashcards Logic ---
let generalFlashIndex = 0;
let isGeneralCardFlipped = false;
let generalFlashContainer;

let traumaFlashIndex = 0;
let isTraumaCardFlipped = false;
let traumaFlashContainer;

let generalFlipBtn, generalNextBtn, traumaFlipBtn, traumaNextBtn;

function setupFlashcards() {
    generalFlashContainer = document.getElementById('general-flashcard-container');
    traumaFlashContainer = document.getElementById('trauma-flashcard-container');

    generalFlipBtn = document.getElementById('general-flip-btn');
    generalNextBtn = document.getElementById('general-next-btn');
    traumaFlipBtn = document.getElementById('trauma-flip-btn');
    traumaNextBtn = document.getElementById('trauma-next-btn');

    // Initial render for both flashcard sets
    if (generalFlashcards.length > 0) {
        renderFlashcard(generalFlashcards, generalFlashIndex, 'general-flashcard-container');
    }
    if (traumaFlashcards.length > 0) {
        renderFlashcard(traumaFlashcards, traumaFlashIndex, 'trauma-flashcard-container');
    }

    // General Flashcards Controls
    if (generalFlipBtn) generalFlipBtn.onclick = () => {
      isGeneralCardFlipped = !isGeneralCardFlipped;
      if (generalFlashcards.length > 0) {
        renderFlashcard(generalFlashcards, generalFlashIndex, 'general-flashcard-container');
      }
    };
    if (generalNextBtn) generalNextBtn.onclick = () => {
      generalFlashIndex = (generalFlashIndex + 1) % generalFlashcards.length;
      isGeneralCardFlipped = false; // Flip back to front for next card
      if (generalFlashcards.length > 0) {
        renderFlashcard(generalFlashcards, generalFlashIndex, 'general-flashcard-container');
      }
    };

    // Trauma Flashcards Controls
    if (traumaFlipBtn) traumaFlipBtn.onclick = () => {
      isTraumaCardFlipped = !isTraumaCardFlipped;
      if (traumaFlashcards.length > 0) {
        renderFlashcard(traumaFlashcards, traumaFlashIndex, 'trauma-flashcard-container');
      }
    };
    if (traumaNextBtn) traumaNextBtn.onclick = () => {
      traumaFlashIndex = (traumaFlashIndex + 1) % traumaFlashcards.length;
      isTraumaCardFlipped = false; // Flip back to front for next card
      if (traumaFlashcards.length > 0) {
        renderFlashcard(traumaFlashcards, traumaFlashIndex, 'trauma-flashcard-container');
      }
    };
}


// Reusable function to render a flashcard
function renderFlashcard(cardsArray, currentCardIndex, containerId) {
  const container = document.getElementById(containerId);
  if (!container || cardsArray.length === 0) return; // Ensure container exists and there are cards

  const card = cardsArray[currentCardIndex];

  // Determine if the card should be flipped based on its global state
  let shouldBeFlipped = false;
  if (containerId === 'general-flashcard-container') {
    shouldBeFlipped = isGeneralCardFlipped;
  } else if (containerId === 'trauma-flashcard-container') {
    shouldBeFlipped = isTraumaCardFlipped;
  }

  container.innerHTML = `
    <div class='flashcard ${shouldBeFlipped ? 'flipped' : ''}'>
      <div class='flashcard-inner' role='button' tabindex='0' aria-pressed='false' aria-label='Flip card'>
        <div class='card-face front'><strong>Q:</strong> ${card.q}</div>
        <div class='card-face back'><strong>A:</strong> ${card.a}</div>
      </div>
    </div>`;

  // Event listeners need to be re-attached because innerHTML overwrites them
  const currentFlashcardElement = container.querySelector('.flashcard');
  if (currentFlashcardElement) {
    currentFlashcardElement.onclick = () => {
      if (containerId === 'general-flashcard-container') {
        isGeneralCardFlipped = !isGeneralCardFlipped;
      } else if (containerId === 'trauma-flashcard-container') {
        isTraumaCardFlipped = !isTraumaCardFlipped;
      }
      // Re-render the specific card to update its flipped state visually
      renderFlashcard(cardsArray, currentCardIndex, containerId);
    };

    currentFlashcardElement.onkeypress = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (containerId === 'general-flashcard-container') {
          isGeneralCardFlipped = !isGeneralCardFlipped;
        } else if (containerId === 'trauma-flashcard-container') {
          isTraumaCardFlipped = !isTraumaCardFlipped;
        }
        renderFlashcard(cardsArray, currentCardIndex, containerId);
      }
    };
  }
}

// --- Initialize the App after the DOM is fully loaded ---
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupQuiz();
    setupFlashcards();
    // After initial setup, show the exams section
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    const examsSection = document.getElementById('exams-section');
    if (examsSection) {
        examsSection.classList.remove('hidden');
    }
});
