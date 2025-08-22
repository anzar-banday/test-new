// Emergency Broadcast System - Enhanced interactivity for the crowdfunding website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initPhoneLinks();
    initImageUpload();
    initSmoothScrolling();
    initShareFunctionality();
    initCountdown();
    initAnimations();
    initEmergencyFeatures();
});

// Emergency Broadcast Features
function initEmergencyFeatures() {
    // Add emergency sound effects (optional)
    initEmergencySounds();
    
    // Add crisis level indicators
    initCrisisIndicators();
    
    // Add emergency broadcast effects
    initEmergencyEffects();
    
    // Note: Audio will play when panic button is pressed (user interaction required)
    console.log('Emergency broadcast ready - click panic button for audio!');
}

// Panic Button Function
function triggerPanic() {
    // Create dramatic panic effect
    const panicButton = document.querySelector('.panic-button');
    const body = document.body;
    
    // Visual panic effect
    panicButton.style.transform = 'scale(1.2)';
    panicButton.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
    
    // Update button text to show it's activated
    const panicText = panicButton.querySelector('.panic-text');
    const originalText = panicText.textContent;
    panicText.textContent = '🎵 AUDIO ACTIVATED! 🎵';
    
    // Shake the entire page
    body.style.animation = 'emergency-shake 0.5s ease-in-out';
    
    // Flash emergency colors
    const flashEffect = document.createElement('div');
    flashEffect.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(220, 38, 38, 0.3);
        z-index: 9999;
        pointer-events: none;
        animation: emergency-flash 0.5s ease-out;
    `;
    document.body.appendChild(flashEffect);
    
    // Play the main MP3 sound
    playIntroSound();
    
    // Emergency alert sound (if supported)
    playEmergencySound();
    
    // Show emergency message
    showEmergencyAlert();
    
    // Reset after effects
    setTimeout(() => {
        panicButton.style.transform = 'scale(1)';
        panicButton.style.background = 'linear-gradient(45deg, #dc2626, #ef4444)';
        body.style.animation = '';
        flashEffect.remove();
        panicText.textContent = originalText;
    }, 3000);
}

// Emergency sound effects
function initEmergencySounds() {
    // Create audio context for emergency sounds
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        window.audioContext = new (AudioContext || webkitAudioContext)();
    }
}

function playEmergencySound() {
    if (window.audioContext) {
        try {
            const oscillator = window.audioContext.createOscillator();
            const gainNode = window.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(window.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, window.audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, window.audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(800, window.audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.1, window.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + 0.3);
            
            oscillator.start(window.audioContext.currentTime);
            oscillator.stop(window.audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Audio not supported or blocked');
        }
    }
}

// Crisis level indicators
function initCrisisIndicators() {
    // Add real-time crisis level updates
    const crisisLevel = document.querySelector('.crisis-text');
    if (crisisLevel) {
        const crisisLevels = [
            'CRISIS LEVEL: MAXIMUM',
            'CRISIS LEVEL: CRITICAL',
            'CRISIS LEVEL: EMERGENCY',
            'CRISIS LEVEL: MAXIMUM'
        ];
        
        let currentIndex = 0;
        setInterval(() => {
            crisisLevel.textContent = crisisLevels[currentIndex];
            currentIndex = (currentIndex + 1) % crisisLevels.length;
        }, 3000);
    }
}

// Emergency effects
function initEmergencyEffects() {
    // Add pulsing effect to emergency elements
    const emergencyElements = document.querySelectorAll('.emergency-alert, .crisis-level, .panic-button');
    
    emergencyElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'emergency-pulse 0.5s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add interactive effects to emergency gallery items
    const emergencyItems = document.querySelectorAll('.emergency-item, .crisis-item');
    
    emergencyItems.forEach((item, index) => {
        // Add staggered animation on page load
        item.style.animationDelay = `${index * 0.2}s`;
        item.style.animation = 'fadeInUp 0.6s ease-out forwards';
        
        // Add click effects
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Play emergency sound on click
            playEmergencySound();
        });
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 25px 50px rgba(220, 38, 38, 0.6)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Add crisis level progression
    initCrisisProgression();
}

// Crisis progression effect
function initCrisisProgression() {
    const crisisItems = document.querySelectorAll('.crisis-item');
    const emergencyItems = document.querySelectorAll('.emergency-item');
    
    // Create a progression effect through the galleries
    let currentPhase = 0;
    const phases = [
        { elements: emergencyItems, message: '🚨 PHASE 1: Emergency Situation Detected 🚨' },
        { elements: crisisItems, message: '🔥 PHASE 2: Crisis Escalation in Progress 🔥' }
    ];
    
    setInterval(() => {
        // Reset all phases
        emergencyItems.forEach(item => item.style.borderColor = '#dc2626');
        crisisItems.forEach(item => item.style.borderColor = '#fbbf24');
        
        // Highlight current phase
        const currentPhaseData = phases[currentPhase];
        currentPhaseData.elements.forEach(item => {
            item.style.borderColor = '#fbbf24';
            item.style.boxShadow = '0 0 30px rgba(251, 191, 36, 0.8)';
        });
        
        // Show phase message
        showPhaseMessage(currentPhaseData.message);
        
        currentPhase = (currentPhase + 1) % phases.length;
    }, 5000);
}

// Play intro sound (MP3 file)
function playIntroSound() {
    try {
        // Create audio element
        const audio = new Audio('ammi-bacha-la-re.mp3');
        
        // Set volume to a reasonable level (0.5 = 50%)
        audio.volume = 0.5;
        
        // Add event listeners for better user experience
        audio.addEventListener('canplaythrough', function() {
            console.log('Audio loaded successfully');
        });
        
        audio.addEventListener('error', function(e) {
            console.log('Audio error:', e);
        });
        
        // Play the sound
        audio.play().catch(function(error) {
            console.log('Audio play failed:', error);
            // Fallback: show a message to user to interact first
            showAudioPermissionMessage();
        });
        
        // Store audio reference for potential reuse
        window.introAudio = audio;
        
    } catch (error) {
        console.log('Audio creation failed:', error);
    }
}

// Show message if audio permission is needed
function showAudioPermissionMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        z-index: 10000;
        text-align: center;
        font-weight: 700;
        font-size: 1.125rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        max-width: 400px;
    `;
    
    message.innerHTML = `
        🎵 AUDIO ALERT 🎵<br><br>
        Click anywhere to enable sound effects!<br>
        (Browser requires user interaction for audio)
    `;
    
    document.body.appendChild(message);
    
    // Remove message when user clicks anywhere
    const removeMessage = () => {
        message.remove();
        document.removeEventListener('click', removeMessage);
        // Try playing audio again after user interaction
        if (window.introAudio) {
            window.introAudio.play().catch(e => console.log('Audio still failed:', e));
        }
    };
    
    document.addEventListener('click', removeMessage);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
            document.removeEventListener('click', removeMessage);
        }
    }, 5000);
}

// Show phase message
function showPhaseMessage(message) {
    const existingMessage = document.querySelector('.phase-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const phaseMessage = document.createElement('div');
    phaseMessage.className = 'phase-message';
    phaseMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 900;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        z-index: 10000;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        animation: phase-message-slide 0.5s ease-out;
    `;
    
    phaseMessage.textContent = message;
    document.body.appendChild(phaseMessage);
    
    setTimeout(() => {
        phaseMessage.style.animation = 'phase-message-slide-out 0.5s ease-in forwards';
        setTimeout(() => {
            phaseMessage.remove();
        }, 500);
    }, 3000);
}

// Show emergency alert
function showEmergencyAlert() {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        z-index: 10000;
        text-align: center;
        font-weight: 900;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        animation: emergency-alert-popup 0.5s ease-out;
    `;
    
    alert.innerHTML = `
        🚨 EMERGENCY ALERT 🚨<br>
        PANIC BUTTON ACTIVATED!<br>
        HELP FAIZAN NOW!
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Enhanced phone link functionality
function initPhoneLinks() {
    const phoneLinks = document.querySelectorAll('.phone-link');
    
    phoneLinks.forEach(link => {
        // Add click analytics (could be useful for tracking)
        link.addEventListener('click', function(e) {
            const phoneNumber = this.textContent.trim();
            console.log('Phone link clicked:', phoneNumber);
            
            // Optional: Add a confirmation for international users
            if (phoneNumber.includes('+91') && !isIndia()) {
                const confirmCall = confirm(`You're about to call an Indian number: ${phoneNumber}. International charges may apply. Continue?`);
                if (!confirmCall) {
                    e.preventDefault();
                }
            }
        });
        
        // Add visual feedback on hover
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Profile image upload functionality (for easy customization)
function initImageUpload() {
    const profileImg = document.getElementById('profile-img');
    
    if (profileImg) {
        // Create a hidden file input for image upload
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        
        // Double-click to change image (useful for site customization)
        profileImg.addEventListener('dblclick', function() {
            if (confirm('Would you like to upload a different profile picture?')) {
                fileInput.click();
            }
        });
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImg.src = e.target.result;
                    // Add a subtle animation
                    profileImg.style.opacity = '0';
                    setTimeout(() => {
                        profileImg.style.transition = 'opacity 0.5s ease';
                        profileImg.style.opacity = '1';
                    }, 100);
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    // Add smooth scrolling for any internal navigation (future-proofing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced share functionality
function shareStory() {
    const shareData = {
        title: 'Help Faizan with Education Fees - Urgent Crowdfunding',
        text: 'Help Faizan Muzaffar, a student at LPU, raise ₹6,000 for urgent backlog fees before August 23rd deadline.',
        url: window.location.href
    };
    
    // Try native Web Share API first (mobile devices)
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => {
                showNotification('Thank you for sharing!', 'success');
            })
            .catch((error) => {
                console.log('Error sharing:', error);
                fallbackShare();
            });
    } else {
        fallbackShare();
    }
}

// Fallback share functionality for desktop
function fallbackShare() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Help Faizan with Education Fees - Urgent Crowdfunding. ₹6,000 needed before Aug 23rd.');
    
    const shareOptions = [
        {
            name: 'WhatsApp',
            url: `https://wa.me/?text=${text}%20${url}`,
            color: '#25D366'
        },
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            color: '#1DA1F2'
        },
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            color: '#4267B2'
        },
        {
            name: 'Copy Link',
            action: () => copyToClipboard(window.location.href),
            color: '#6B7280'
        }
    ];
    
    showShareModal(shareOptions);
}

// Share modal for desktop users
function showShareModal(options) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 16px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        animation: slideUp 0.3s ease;
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: #374151; text-align: center;">Share Faizan's Story</h3>
        <div id="share-buttons"></div>
        <button id="close-modal" style="margin-top: 1rem; width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; background: white; border-radius: 8px; cursor: pointer;">Close</button>
    `;
    
    const buttonsContainer = modal.querySelector('#share-buttons');
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.style.cssText = `
            width: 100%;
            padding: 1rem;
            margin-bottom: 0.5rem;
            border: none;
            border-radius: 8px;
            background: ${option.color};
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease;
        `;
        button.textContent = option.name;
        
        button.addEventListener('click', () => {
            if (option.action) {
                option.action();
            } else {
                window.open(option.url, '_blank', 'width=600,height=400');
            }
            document.body.removeChild(overlay);
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        buttonsContainer.appendChild(button);
    });
    
    // Close modal functionality
    modal.querySelector('#close-modal').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Link copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Could not copy link. Please copy manually.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        info: '#3B82F6'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // Add CSS animations for notifications
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Countdown timer to deadline
function initCountdown() {
    const deadline = new Date('2024-08-23T23:59:59').getTime();
    const deadlineElement = document.querySelector('.deadline');
    
    if (!deadlineElement) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            if (days > 0) {
                deadlineElement.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ${days} days, ${hours} hours left!
                `;
            } else if (hours > 0) {
                deadlineElement.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ${hours} hours, ${minutes} minutes left!
                `;
                deadlineElement.style.animation = 'pulse 1s infinite';
            } else {
                deadlineElement.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    URGENT: ${minutes} minutes left!
                `;
                deadlineElement.style.animation = 'pulse 0.5s infinite';
                deadlineElement.style.background = '#DC2626';
                deadlineElement.style.color = 'white';
            }
        } else {
            deadlineElement.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
                </svg>
                Deadline passed
            `;
            deadlineElement.style.background = '#7F1D1D';
            deadlineElement.style.color = 'white';
        }
    }
    
    // Update immediately and then every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// Scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('.profile-section, .progress-section, .story-section, .action-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Utility function to detect if user is in India (rough estimation)
function isIndia() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezone.includes('Kolkata') || timezone.includes('Asia/Calcutta');
}

// Add click tracking for better UX insights
function trackInteraction(action, element) {
    console.log(`User interaction: ${action} on ${element}`);
    // This could be connected to analytics services like Google Analytics
}

// Enhanced button interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        const buttonText = e.target.textContent.trim();
        trackInteraction('button_click', buttonText);
        
        // Add visual feedback
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('[style*="position: fixed"]');
        modals.forEach(modal => {
            if (modal.parentNode === document.body) {
                document.body.removeChild(modal);
            }
        });
    }
});

// Progressive Web App features (for potential future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration could be added here for offline functionality
        console.log('Service Worker support detected');
    });
}
