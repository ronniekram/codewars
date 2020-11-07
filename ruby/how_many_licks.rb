#my solution
def total_licks(env)
  licks = 252
  env.each_value {|k| licks = licks + k }
  if env.any? {|k,v| v.positive?}
  toughest = env.sort_by {|k, v| -v}[0][0]
    return "It took #{licks} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was #{toughest}."
  end 
  "It took #{licks} licks to get to the tootsie roll center of a tootsie pop."
end

#best solution

def total_licks(env)
  env.any? && env.values.max > 0 ? str = " The toughest challenge was #{env.key(env.values.max)}." : str = ''
  "It took #{252 + env.values.inject(0, :+)} licks to get to the tootsie roll center of a tootsie pop." + str
end